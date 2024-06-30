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
      const userId = await req?.user;
      const author = await userModel.findById(userId).populate("name");
      const createCourse = await courseModel.create({
        title: title,
        description: description,
        estimatedPrice: estimatedPrice,
        discountPrice: discountPrice,
        courseImage: courseImage,
        courseType: courseType,
        author: author,
      });
      return res.status(201).json({
        message: "create course successfully",
        create_course: createCourse,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while create course",
        error: error.message,
      });
    }
  }
);

// get single course

export const getCourse = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = await req.params;
      const getCourse = await courseModel.findById(courseId);
      return res.status(200).json({
        message: "get single course successfully",
        create_course: getCourse,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while get single course",
        error: error.message,
      });
    }
  }
);

