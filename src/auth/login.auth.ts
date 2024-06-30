import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userSchema } from "../schema/user.schema";
import { generateAccessToken, generateRefreshToken } from "../helper/generate.token";
import { options } from "../global/options";
export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const {email,password} = req.body;
    const userExist = await userModel.findOne({email})
    if (!userExist) {
      res.status(401).json({
        message:"user doesn't exist with this email"
      });
      return next()
    }
    // compare password
    const isPasswordMatch = async (password:string) => {
      try {
        const isPasswordValid = await bcrypt.compare(password,userExist.password)
        if (!isPasswordValid) {
          res.status(403).json({
            message:"Invalid user credentials"
          })
          return next()
        }
      } catch (error) {
        return res.status(500).json({
          message:"something went wrong while validating password"
        })
      }
    }
    const validPassword = isPasswordMatch(password)
    // generate access token
    const accessToken = await generateAccessToken(userExist)
    // generate refresh token
    const refreshToken = await generateRefreshToken(userExist)
    const loginUser = await userModel.findOne({email})
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json({
      message:"user login successfully",
      user_data:loginUser
    });
  } catch (error:any) {
    return res.status(500).json({
      message:"something went wrong while login user",
      error:error.message
    })
  }
})