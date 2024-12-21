const express = require('express');
const router = express.Router();

const multer = require('multer');
const { multerStorage } = require('../../utils/storage');

const Blog = require('../../models/blog');
const auth = require('../../middleware/auth');

router.post(
  '/add',
  auth,
  multer({ storage: multerStorage }).single('image'),
  async (req, res) => {
    console.log(req);

    try {
      if (!req.body.title || req.body.title.trim().length === 0) {
        return res.status(400).json({
          error: "s'il vous plaît entrer le titre de votre blog."
        });
      }

      if (!req.body.content || req.body.content.trim().length === 0) {
        return res.status(400).json({
          error: "s'il vous plaît entrer le contenu de votre blog."
        });
      }
      // const imagePaths = req.files.map(file => file.path);
      const host =
        process.env.NODE_ENV === 'production'
          ? 'https://maisondesalgues.com/api/'
          : 'http://localhost:3000/api/';
      console.log(req.file);

      const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        imageUrl: host + req.file.path
      });

      const blogDoc = await blog.save();

      res.status(200).json({
        success: true,
        message: `Votre blog a été ajouté avec succès!`,
        blog: blogDoc
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "Votre demande n'a pas pu être traitée. Veuillez réessayer."
      });
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      blogs
    });
  } catch (error) {
    res.status(400).json({
      error: "Votre demande n'a pas pu être traitée. Veuillez réessayer."
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogId = req.params.id;

    const blogDoc = await Blog.findOne({ _id: blogId });

    if (!blogDoc) {
      res.status(404).json({
        message: `Impossible de trouver le blog avec l'identifiant: ${blogId}.`
      });
    }

    res.status(200).json({
      blog: blogDoc
    });
  } catch (error) {
    res.status(400).json({
      error: "Votre demande n'a pas pu être traitée. Veuillez réessayer."
    });
  }
});

router.put(
  '/:id',
  auth,
  multer({ storage: multerStorage }).single('image'), // Use multer for file upload
  async (req, res) => {
    console.log(req);

    try {
      const blogId = req.params.id;

      const blogDoc = await Blog.findOne({ _id: blogId });

      if (!blogDoc) {
        return res.status(404).json({
          message: `Impossible de trouver le blog avec l'identifiant: ${blogId}.`
        });
      }

      // Update the title and content as usual
      blogDoc.title = req.body.title;
      blogDoc.content = req.body.content;
      console.log(req.file);

      // Check if a new image has been uploaded, and update the imageUrl if necessary
      if (req.file) {
        const host =
          process.env.NODE_ENV === 'production'
            ? 'https://maisondesalgues.com/api/'
            : 'http://localhost:3000/api/';
        blogDoc.imageUrl = host + req.file.path; // Update imageUrl if a new image is uploaded
      }

      const updatedBlog = await blogDoc.save();

      res.status(200).json({
        success: true,
        message: `Votre blog a été mis à jour avec succès!`,
        blog: updatedBlog
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        error: "Votre demande n'a pas pu être traitée. Veuillez réessayer."
      });
    }
  }
);

router.delete('/:id', auth, async (req, res) => {
  try {
    const blogId = req.params.id;

    const blogDoc = await Blog.findOne({ _id: blogId });

    if (!blogDoc) {
      res.status(404).json({
        message: `Impossible de trouver le blog avec l'identifiant: ${blogId}.`
      });
    }

    await blogDoc.remove();

    res.status(200).json({
      success: true,
      message: `Votre blog a été supprimé avec succès!`
    });
  } catch (error) {
    res.status(400).json({
      error: "Votre demande n'a pas pu être traitée. Veuillez réessayer."
    });
  }
});

module.exports = router;
