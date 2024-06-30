import { Router } from "express";
import { signUp } from "../auth/signup.auth";
import { logout } from "../auth/logout.auth";
import { login } from "../auth/login.auth";
import { validate } from "../middlewares/validate";
import { signUpSchema } from "../validations/user.validation";
const userRoutes = Router();
// 
userRoutes.route("/users/auth/signup").post(validate(signUpSchema),signUp);
userRoutes.route("/users/auth/login").post(login);
userRoutes.route("/users/auth/logout").post(logout);

// export userRoutes
export { userRoutes };