const multer = require('multer');
const mime = require('mime-types'); // Helps map MIME types to file extensions

function formatProductName(name) {
  return name.replace(/ /g, '-').toLowerCase();
}

function getExtensionFromMime(mimetype) {
  return mime.extension(mimetype); // Convert MIME type (e.g., image/png) to extension (e.g., png)
}

function generateImageName(productName, fileName, mimetype) {
  const extension = getExtensionFromMime(mimetype) || getExtension(fileName);
  return `${formatProductName(productName)}:${Date.now()}.${extension}`;
}

exports.multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'utils/images');
  },
  filename: (req, file, cb) => {
    const productName = req.body.name || 'default'; // Fallback to 'default' if no name provided
    const storageDistPath = generateImageName(
      productName,
      file.originalname,
      file.mimetype
    );
    cb(null, storageDistPath);
  }
});
