import { Router } from "express";
const userRoutes = Router();
userRoutes.route("/users/auth/signup").post();

// export userRoutes
export { userRoutes };