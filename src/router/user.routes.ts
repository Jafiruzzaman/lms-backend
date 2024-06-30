import { Router } from "express";
import { signUp } from "../auth/signup.auth";
import { logout } from "../auth/logout.auth";
import { login } from "../auth/login.auth";
import { validate } from "../middlewares/validate";
import { loginSchema, signUpSchema } from "../validations/user.validation";
import { authenticate } from '../middlewares/authenticate';
import { user } from "../auth/user.auth";
const userRoutes = Router();
// auth
userRoutes.route("/users/auth/signup").post(validate(signUpSchema),signUp);
userRoutes.route("/users/auth/login").post(validate(loginSchema),login);
userRoutes.route("/users/auth/logout").post(authenticate,logout);
userRoutes.route("/users/me").get(authenticate,user);

// export userRoutes
export { userRoutes };