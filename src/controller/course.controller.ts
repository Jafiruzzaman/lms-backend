import courseModel from "../model/course.model";
import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
export const createCourse = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        title,
        description,
        estimatedPrice,
        discountPrice,
        courseImage,
        courseType,
      } = await req.body;
      // @ts-ignore
      const userId = await req?.user
      const author = await userModel.findById(userId).populate("name")
      const createCourse = await courseModel.create({
        title:title,
        description:description,
        estimatedPrice:estimatedPrice,
        discountPrice:discountPrice,
        courseImage:courseImage,
        courseType:courseType,
        author:author
      })
      return res.status(201).json({
        message: "user login successfully",
        create_course:createCourse,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while create course",
        error: error.message,
      });
    }
  }
);
