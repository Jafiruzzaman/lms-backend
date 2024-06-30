import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
export const signUp = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const {name,email,password} = req.body;
    console.log("email",email)
    // check if user exist
    const userExist = await userModel.findOne({email});
    if (!userExist) {
      res.status(400).json({
        message:"user is already exist with this email"
      });
      return next()
    }
    const signUp = await userModel.create({name,email,password})
    return res.status(201).json({
      message:"user signup successfully",
      user:signUp
    });
  } catch (error:any) {
    return res.status(500).json({
      message:"something went wrong while signup user",
      error:error.message
    })
  }
})