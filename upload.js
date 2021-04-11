/*
 * cloudinaryにフォントをアップロードするnodeスクリプト
 * https://www.learnwithjason.dev/blog/upload-custom-font-cloudinary-node
 */

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.log('unset envs.');
  return;
}

const cloudinary = require('cloudinary').v2;

// this is shown at the top right of https://cloudinary.com/console
// const CLOUDINARY_CLOUD_NAME = '<YOUR CLOUD NAME>';
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

// find these at https://cloudinary.com/console/settings/security
// const CLOUDINARY_API_KEY = '<YOUR CLOUDINARY API KEY>';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
// const CLOUDINARY_API_SECRET = '<YOUR CLOUDINARY API SECRET>';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

// path to the custom font (TTF or OTF only), relative to this file
const PATH_TO_FILE = './fonts/Corporate-Logo-Medium-ver2.ttf';

// used in Cloudinary URLs — no underscores allowed!
const PUBLIC_ID = 'Corp-logo.ttf';

const uploadToCloudinary = async () => {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  const result = await cloudinary.uploader.upload(PATH_TO_FILE, {
    resource_type: 'raw',
    type: 'authenticated',
    public_id: PUBLIC_ID,
  });

  console.log(result);
};

uploadToCloudinary();