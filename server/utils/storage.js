// const AWS = require('aws-sdk');

// const keys = require('../config/keys');

// exports.s3Upload = async image => {
//   try {
//     let imageUrl = '';
//     let imageKey = '';
//     if (!keys.aws.accessKeyId) {
//       console.warn('Missing aws keys');
//     }

//     if (image) {
//       const s3bucket = new AWS.S3({
//         accessKeyId: keys.aws.accessKeyId,
//         secretAccessKey: keys.aws.secretAccessKey,
//         region: keys.aws.region
//       });

//       const params = {
//         Bucket: keys.aws.bucketName,
//         Key: image.originalname,
//         Body: image.buffer,
//         ContentType: image.mimetype
//       };

//       const s3Upload = await s3bucket.upload(params).promise();

//       imageUrl = s3Upload.Location;
//       imageKey = s3Upload.key;
//     }

//     return { imageUrl, imageKey };
//   } catch (error) {
//     return { imageUrl: '', imageKey: '' };
//   }
// };

const multer = require('multer');

function formatProductName(name) {
  return name.replace(/ /g, '-').toLowerCase();
}

function getExtension(filename) {
  return filename.split('.').pop();
}

function generateImageName(productName, fileName) {
  return `${formatProductName(productName)}:${Date.now()}.${getExtension(
    fileName
  )}`;
}

exports.multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'utils/images');
  },
  filename: (req, file, cb) => {
    // const name = file.originalname.toLowerCase().split(' ').join('-');
    // storageDistPath = Date.now() + '-' + name;
    const productName = req.body.name || '';
    storageDistPath = generateImageName(productName, file.originalname);
    cb(null, storageDistPath);
  }
});
