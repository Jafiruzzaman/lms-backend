import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourse,
  updateCourse,
} from "../controller/course.controller";
import { isAdmin } from "../admin/isAdmin";
import { upload } from "../middlewares/multer.middleware";

const courseRoutes = Router();
// course CRUD
courseRoutes.route("/create-course").post(
  upload.fields([
    {
      name: "courseImage",
      maxCount: 3,
    },
  ]),
  authenticate,
  isAdmin,
  createCourse
);
courseRoutes.route("/get-course").get(authenticate, isAdmin, getCourse);
courseRoutes.route("/get-all-course").get(authenticate, isAdmin, getAllCourse);
courseRoutes.route("/update-course").put(
  upload.fields([
    {
      name: "courseImage",
      maxCount: 3,
    },
  ]),
  authenticate,
  isAdmin,
  updateCourse
);
courseRoutes
  .route("/delete-course")
  .delete(authenticate, isAdmin, deleteCourse);
// export
export { courseRoutes };