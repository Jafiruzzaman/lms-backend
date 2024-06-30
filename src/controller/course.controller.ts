import courseModel from "../model/course.model";
import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
// ADD CLOUDINARY IN THIS FOUR CONTROLLER
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
      // TODO: Here use caching
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

// get all course
export const getAllCourse = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllCourse = await courseModel.find();
      // TODO: Here use caching
      return res.status(200).json({
        message: "get single course successfully",
        create_course: getAllCourse,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while get all course",
        error: error.message,
      });
    }
  }
);
// update course
export const updateCourse = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = await req.params;
      // @ts-ignore
      const userId = req?.user;
      const {
        title,
        description,
        estimatedPrice,
        discountPrice,
        courseImage,
        courseType,
      } = req.body;
      const author = await userModel.findById(userId).populate("name");
      const getCourse = await courseModel.findById(courseId);
      // TODO: Here use caching
      if (getCourse?.author._id === userId) {
        res.status(401).json({
          message: "you can't update this course",
        });
        return next();
      }
      const updateCourse = await courseModel.findByIdAndUpdate(courseId, {
        title: title,
        description: description,
        estimatedPrice: estimatedPrice,
        discountPrice: discountPrice,
        courseImage: courseImage,
        courseType: courseType,
        author: author,
      });
      return res.status(204).json({
        message: "delete course successfully",
        create_course: updateCourse,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while delete course",
        error: error.message,
      });
    }
  }
);

//delete course
export const deleteCourse = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = await req.params;
      // @ts-ignore
      const userId = req?.user;
      const getCourse = await courseModel.findById(courseId);
      // TODO: Here use caching
      let deleteCourse;
      if (getCourse?.author._id === userId) {
        deleteCourse = await courseModel.findByIdAndDelete(courseId);
      } else {
        res.status(401).json({
          message: "you can't delete this course",
        });
        return next();
      }
      return res.status(204).json({
        message: "delete course successfully",
        create_course: deleteCourse,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "something went wrong while delete course",
        error: error.message,
      });
    }
  }
);