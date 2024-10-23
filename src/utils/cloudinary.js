import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name:'',
    api_key:'',
    api_secret:''
})

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if (!localFilePath) return null;

         const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })        
        fs.unlinkSync(localFilePath)

        return response;

    } catch (error) {
        console.log(error,'error')
        fs.unlinkSync(localFilePath) //remove locally saved temporary file
        return null;
    }
}

export {uploadOnCloudinary}