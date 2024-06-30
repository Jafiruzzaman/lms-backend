import mongoose from "mongoose";
import { config } from "../config/config";
import { db_name } from "../constant/db_name";
export const ConnectDB = async () => {
  try {
    const Connect = await mongoose.connect(`${config.mongodb_uri}/${db_name}`);
    console.log(
      `mongodb connection successful. mongodb connection host ${Connect.connection.host}`
    );
  } catch (error) {
    mongoose.connection.on("error", async () => {
      console.log("mongodb connection error :", error);
      process.exit(1);
    });
  }
};
