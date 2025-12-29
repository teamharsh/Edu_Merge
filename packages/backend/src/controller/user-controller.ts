import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";
import User,{IUser} from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { any, z } from "zod";
import { JWT_SECRET } from "../config/config";
import dotenv from "dotenv";
import Workspace from "../models/workspace";
import { sendOtp } from "../utils/send-otp";
import passport from "passport";
import { generateSubdomain } from "../utils/subdomain.utils";

dotenv.config();

export const SignUp: RequestHandler = async (req, res) => {
  try {
    const requiredBody = z.object({
      email: z.string().min(8).max(30).email(),
      name: z.string().min(3).max(30),
      password: z.string().min(5).max(30),
      role: z.enum(['Instructor', 'User']),
      bio: z.string().optional(),
      profilePicture: z.string().optional(),
    });

    const parseDataWithSuccess = requiredBody.safeParse(req.body);
    if (!parseDataWithSuccess.success) {
      res.status(400).json({ message: "Incorrect format", success: false });
      return;
    }

    const { name, email, password, role, bio, profilePicture } = req.body;

    const findUserExist = await User.findOne({ email });
    if (findUserExist) {
      res.status(409).json({
        message: "Email already exists, try to use another email",
        success: false,
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let subdomain = null;

    if (role === 'Instructor') {
      subdomain = await uniqueSubdomain(generateSubdomain(name));
    }

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    if (role === 'Instructor') {
      await Workspace.create({
        user: newUser._id,
        bio: bio || '',
        profilePicture: profilePicture || '',
        subdomain
      });
    }

    await sendOtp(email);

    res.status(201).json({
      message: "You are signed up",
      data: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      success: true,
      err: {},
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      err: error.message,
    });
  }
};

export const signin: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(401).json({ message: 'Invalid email or password', success: false });
      return;
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password', success: false });
      return;
    }

    const payload = { id: userExist.id };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token: `Bearer ${token}`,
      success: true,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export const verify: RequestHandler = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found", success: false });
      return;
    }

    if (user.otp !== otp) {
      res.status(400).json({ message: "Invalid OTP", success: false });
      return;
    }

    user.isVerified = true;
    await user.save();

    res.status(201).json({
      message: "User is verified",
      success: true,
      error: {}
    });
  } catch (error: any) {
    console.error("Error verifying user:", error);
    res.status(500).json({
      message: "Server error", 
      success: false,
      error: error.message
    });
  }
};

export const getUserDetails: RequestHandler = async (req, res) => {
  try {
    const user = await User.findById(req.user as IUser).select('-password');
    if (!user) {
      res.status(404).json({ message: "User not found", success: false });
      return;
    }
    res.json(user);
  } catch (error: any) {
    console.error('Error in getUserDetails:', error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

async function uniqueSubdomain(base: string): Promise<string> {
  let subdomain = base;
  let counter = 1;

  while (await User.findOne({ subdomain })) {
    subdomain = `${base}${counter}`;
    counter++;
  }
  return subdomain;
}

export const googleAuth: RequestHandler = passport.authenticate('google', {
  scope: ['profile', 'email']
});

export const googleAuthCallback: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    'google',
    { session: false },
    (err: any, user: IUser | false) => {
      if (err || !user) {
        res.status(400).json({ message: 'Something went wrong' });
        return;
      }

      const token = jwt.sign(
        { id: user._id },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      
      res.redirect(`/auth/success?token=${token}`);
    }
  )(req, res, next);
};
