import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,

  api_secret: process.env.CLOUDINARY_API - SECRET,
});
const uploadOnCloudinary = async(localFilePath) => {
    try {
        if (!localFilePath) return null
        const uploadResult= await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })//file has been successfully upload
        console.log("fileis uploaded", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temporarily file s the operation get
        return null
    }
}
export { uploadOnCloudinary };