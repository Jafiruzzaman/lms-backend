import contactModel from "../model/contact.model";
import userModel from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";

export const contactController = asyncHandler(  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name,email,message} = await req.body;
    // @ts-ignore
    const userId = await req.user
    const userInfo = await userModel.findById(userId);
    const contactMessage = await contactModel.create({
      name:userInfo?.name,
      email:userInfo?.email,
      message:message
    })
    return res.status(201).json({
      message: "message send successfully",
      message_data: contactMessage,
    });
  } catch (error:any) {
    return res.status(500).json({
      message: "something went wrong while send message",
      error: error.message,
    });
  }
})