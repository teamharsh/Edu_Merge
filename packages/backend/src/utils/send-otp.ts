import User from "../models/users";
import { sendEmail } from "./otp.utils";
import { generateOtp } from "./otp.utils";
import { Document } from "mongoose"; 

interface IUser extends Document {
  email: string;
  otp?: string; 
}

export const sendOtp = async (email: string): Promise<string> => {
  const user = await User.findOne<IUser>({ email }); 

  if (!user) {
    throw { status: 404, message: "User not found" };
  }

  const otp = generateOtp(6);
  user.otp = otp;

  const updateUser = await user.save();
  console.log("updateUser", updateUser);

  await sendEmail(email, otp); 

  return otp; 
};
