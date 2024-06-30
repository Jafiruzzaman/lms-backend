import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourse,
  updateCourse,
} from "../controller/course.controller";

const courseRoutes = Router();
// course CRUD
courseRoutes.route("/create-course").post(authenticate, createCourse);
courseRoutes.route("/get-course").get(authenticate, getCourse);
courseRoutes.route("/get-all-course").get(authenticate, getAllCourse);
courseRoutes.route("/update-course").put(authenticate, updateCourse);
courseRoutes.route("/delete-course").delete(authenticate, deleteCourse);
// export
export { courseRoutes };