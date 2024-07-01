import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { options } from "../global/options";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = await req.body;
      // if user is already exist
      const userExist = await userModel.findOne({ email });
      if (!userExist) {
        res.status(401).json({
          message: "Invalid Email address",
        });
        return next();
      }
      // check is password is match or not
      const isPasswordCorrect = await bcrypt.compare(
        password,
        userExist.password
      );
      if (!isPasswordCorrect) {
        res.status(401).json({
          message: "Invalid user credentials",
        });
        return next();
      }
      const signInUser = await userModel.findOne({ email }).select("-password");
      const generateAccessAndRefreshToken = async () => {
        try {
          const accessToken = await jwt.sign(
            {
              _id: userExist._id,
              username: userExist.name,
              email: userExist.email,
              isAdmin: userExist.isAdmin,
              roles:userExist.roles
            },
            config.access_token_secret,
            {
              expiresIn: config.access_token_expiry,
            }
          );
          const refreshToken = await jwt.sign(
            {
              _id: userExist._id,
            },
            config.refresh_token_secret,
            {
              expiresIn: config.refresh_token_expiry,
            }
          );
          userExist.refreshToken = refreshToken;
          userExist.save({ validateBeforeSave: false });
          return { accessToken, refreshToken };
        } catch (error) {
          return next(error);
        }
      };
      const { accessToken, refreshToken }: any =
        await generateAccessAndRefreshToken();
      const login = await userModel.findById(userExist._id).select("-password -refreshToken");
      
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          message: "user signin successfully",
          data: login,
        });
    } catch (error: any) {
      return res.json({
        message: error.message,
      });
    }
  }
);