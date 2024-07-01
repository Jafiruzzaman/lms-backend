import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { globalErrorHandler } from "../utils/globalErrorHandler";
export const isAdmin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const user = await req.user;
      const userId = await userModel.findById(user);
      const admin = userId?.isAdmin;
      if (admin === false) {
        res.status(401).json({
          message: "You can't access admin functionality",
        });
        return next()
      }
      return next();
    } catch (error: any) {
      res.status(500).json({
        message: "something went wrong while checking isAdmin",
        error: error.message,
      });
    }
  }
);