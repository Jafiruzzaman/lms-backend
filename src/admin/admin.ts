import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
export const adminController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const user = await req.user;
      const userId = await userModel.findById(user);
      const admin = userId?.isAdmin;
      return res.status(200).json({
        message: "welcome to the admin panel",
        admin_data: admin,
      });
    } catch (error:any) {
      res.status(500).json({
        message: "something went wrong in admin controller",
        error: error.message,
      });
    }
  }
);
