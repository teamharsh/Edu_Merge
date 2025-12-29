import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../models/users";

// Define a type with a required 'id' to avoid type conflicts
interface AuthenticatedUser extends IUser {
  id: string;
}

// Define a custom request interface to include the user property
interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

export const authenticate = (
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
) => {
  passport.authenticate('jwt', (err:any, user:any) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized access: no token provided',
      });
    }
    req.user = user as AuthenticatedUser; // Attach the user with enforced id type
    next();
  })(req, res, next);
};

export const authenticateGoogle = (
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
) => {
  passport.authenticate('google', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized access: Google authentication failed',
      });
    }
    req.user = user as AuthenticatedUser; // Attach the user with enforced id type
    next();
  })(req, res, next);
};
