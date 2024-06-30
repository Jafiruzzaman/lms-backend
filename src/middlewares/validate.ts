import { NextFunction, Request, Response } from "express";
export const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      let reqBody = await req.body;
      const parseBody = schema.parseAsync(reqBody);
      reqBody = parseBody;
      return next();
    } catch (error: any) {
      const message = error.errors[0].message;
      return res.status(500).json({
        message: message,
      });
    }
  };