import mongoose from "mongoose";
import { User } from "../interface/user.interface";
import { userSchema } from "../schema/user.schema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../config/config";
// hash the password
userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, genSalt);
    user.password = hashPassword;
    return next();
  } catch (error: any) {
    console.log(
      `something went wrong while hashing the password ${error.message}`
    );
  }
});

// generateAccessToken
userSchema.methods.generateAccessToken = async function (user: any) {
  jwt.sign(
    {
      userId:user._id,
      username:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
      roles:user.roles,
    },
    config.access_token_secret,
    {
      expiresIn: config.access_token_expiry,
    }
  );
};
// generateRefreshToken
userSchema.methods.generateRefreshToken = async function (user: any) {
  jwt.sign(
    {
      userId:user._id,
    },
    config.refresh_token_secret,
    {
      expiresIn: config.refresh_token_expiry,
    }
  );
};

export default mongoose.model<User>("User", userSchema);
