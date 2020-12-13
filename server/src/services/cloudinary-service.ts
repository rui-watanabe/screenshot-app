import cloudinary from 'cloudinary';

class CloudinaryService {
  private _cloudinary?: any;

  get client(){
    if(!this._cloudinary){
      throw new Error("Can not access cloudinary client");
    }
    return this._cloudinary;
  }

  connect(){
    if(!process.env.CLOUDINARY_CLIENT_NAME){
      throw new Error("Not defined process.env.CLOUDINARY_CLIENT_NAME");
    }

    if(!process.env.API_PUBLIC_KEY){
      throw new Error("Not defined process.env.process.env.API_PUBLIC_KEY");
    }

    if(!process.env.API_SECRET_KEY){
      throw new Error("Not defined process.env.process.env.API_SECRET_KEY");
    }

    this._cloudinary = cloudinary.v2;
    this._cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
      api_public_key: process.env.API_PUBLIC_KEY,
      api_secret_key: process.env.API_SECRET_KEY
    });
  };
}

export const cloudinaryService = new CloudinaryService();