import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
export const user = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
  try {
    // @ts-ignore
    const userId = await req.user
    const user = await userModel.findById(userId).select('-password -refreshToken')
    if (!user) {
      res.status(404).json({
        message:"No user found"
      });
      return next()
    }
    return res.status(200).json({
      message:"get user data successfully",
      data:user
    });
  } catch (error:any) {
    res.status(500).json({
      message:"something went wrong while get user data",
      error:error.message
    });
  }
})