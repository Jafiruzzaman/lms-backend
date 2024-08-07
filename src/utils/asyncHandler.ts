import { NextFunction, Request, Response } from "express";
export const asyncHandler =
  (fn: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error:any) {
      next(error.message);
    }
  };
