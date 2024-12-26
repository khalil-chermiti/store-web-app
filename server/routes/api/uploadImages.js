const express = require('express');
const router = express.Router();

const multer = require('multer');
const { multerStorage } = require('../../utils/storage');
const auth = require('../../middleware/auth');

router.post(
  '/upload',
  auth,
  multer({ storage: multerStorage }).array('images'), // Handle multiple images
  (req, res) => {
    try {
      // Check if files were uploaded
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No images were uploaded.'
        });
      }

      // Process the uploaded files
      const uploadedFiles = req.files.map(file => ({
        originalName: file.originalname,
        storagePath: file.path, // Relative path to the uploaded file
        fileUrl: `${req.protocol}://${req.get('host')}/api/${file.path}` // Full URL for client usage
      }));

      // Return the uploaded file info
      res.status(200).json({
        success: true,
        message: 'Images uploaded successfully.',
        files: uploadedFiles
      });
    } catch (error) {
      console.error('Error uploading images:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while uploading images.',
        error: error.message
      });
    }
  }
);

module.exports = router;
