import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name:'dbanx3dq1',
    api_key:142421711731826,
    api_secret:'YnZpAt6MW0Rmn_S5ZYbyStVU4Pg'
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