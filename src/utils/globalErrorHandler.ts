import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";
export const globalErrorHandler = async (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "something went wrong";
  const errorStack = config.node_env === "development" ? error.stack : "";
  return res.status(statusCode).json({
    message: message,
    errorStack: errorStack,
  });
};
