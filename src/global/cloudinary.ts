import { v2 } from "cloudinary";
import { config } from "../config/config";
import fs from "fs";
v2.config({
  cloud_name:config.cloudinary_cloud_name,
  api_key:config.cloudinary_cloud_api_key,
  api_secret:config.cloudinary_cloud_api_secret
})
export const fileUploadOnCloudinary = async (localFilePath:string,folder:string) => {
  try {
    // check if localFilePath exist or not
    if (!localFilePath) {
      throw new Error("local file path is missing")
    }
    // upload the file on cloudinary
    const uploadResult = await v2.uploader.upload(localFilePath,{
      folder:folder,
      resource_type:"auto",
    })
    // remove the local file
    fs.unlinkSync(localFilePath)
    console.log('remove file')
    // return upload result
    return uploadResult;
  } catch (error) {
    if (!localFilePath) {
      console.log("error",error)
      throw new Error("something went wrong while uploading file on cloudinary Error",)
      // return null
    }
  }
}