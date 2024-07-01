import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/user.model";

export const updatePassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { oldPassword, newPassword } = await req.body;
      // @ts-ignore
      const userId = await req.user;
      const user = await userModel.findById(userId);
      console.log("update password",user)
      // @ts-ignore
      const isPasswordValid = await bcrypt.compare(oldPassword, user?.password);
      if (!isPasswordValid) {
        res.status(401).json({
          message: "Invalid user credentials",
        });
        return next();
      } else {
        const hashPassword = await bcrypt.hash(newPassword, 10);
        const updatePassword = await userModel.findByIdAndUpdate(
          userId,
          {
            password: hashPassword,
          },
          {
            new: true,
          }
        );
        return res.status(200).json({
          message: "password update successfully",
          data: updatePassword,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "something went wrong while updating password",
        error: error,
      });
    }
  }
);