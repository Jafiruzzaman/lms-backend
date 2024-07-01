import emailModel from "../model/email.model";
import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
export const emailController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      // @ts-ignore
      const userId = req.user;
      const user = await userModel.findById(userId);
      const emailSubscriptions = await emailModel.create({
        userInfo: user,
        email: user?.email || email,
      });
      return res.status(201).json({
        message: "email send successfully",
        Subscriptions: emailSubscriptions,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong in email subscriptions",
        error: error.message,
      });
    }
  }
);