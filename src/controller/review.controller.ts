import reviewModel from "../model/review.model";
import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";

export const reviewController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, image, review } = req.body;
      // @ts-ignore
      const userId = await req?.user;
      const user = await userModel.findById(userId);
      const reviewPost = await reviewModel.create({
        name: user?.name,
        email: user?.email,
        image: user?.profile,
        review: review,
      });
      return res.status(201).json({
        message: "review post successfully",
        reviewPost: reviewPost,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while create course",
        error: error.message,
      });
    }
  }
);