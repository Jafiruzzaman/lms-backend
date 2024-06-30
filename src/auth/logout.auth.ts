import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
export const logout = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
  try {
    // @ts-ignore
    const userId = await req?.user
    const user = await userModel.findByIdAndUpdate(userId,{
      $unset:{
        refreshToken:1
      }
    },{
      new:true
    })
    return res.status(200).json({
      message:"user logout successfully",
    });
  } catch (error:any) {
    return res.status(500).json({
      message:"something went wrong while logout user",
      error:error.message
    })
  }
})