import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.header("Authorization")?.replace("bearer ", "") ||
      req.cookies.accessToken;
    if (!token) {
      res.status(401).json({
        message: "Token required",
      });
      return next();
    }
    // decode the token
    const decodedToken = await jwt.verify(token, config.access_token_secret);
    if (!decodedToken) {
      res.status(401).json({
        message: "Invalid token",
      });
      return next();
    }
    // FIXME: remove it after seen the log
    // @ts-ignore
    req?.user = decodedToken._id;
    return next();
  } catch (error: any) {
    res.status(500).json({
      message: "something went wrong while validating tokens",
      error: error.message,
    });
  }
};