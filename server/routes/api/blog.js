const express = require('express');
const router = express.Router();

const multer = require('multer');
const { multerStorage } = require('../../utils/storage');

const Blog = require('../../models/blog');
const auth = require('../../middleware/auth');

router.post('/add', auth, async (req, res) => {
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

    const blog = new Blog({
      title: req.body.title,
      content: req.body.content
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
});

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

router.put('/:id', auth, async (req, res) => {
  try {
    const blogId = req.params.id;

    const blogDoc = await Blog.findOne({ _id: blogId });

    if (!blogDoc) {
      res.status(404).json({
        message: `Impossible de trouver le blog avec l'identifiant: ${blogId}.`
      });
    }

    blogDoc.title = req.body.title;
    blogDoc.content = req.body.content;
    blogDoc.updated = new Date();

    const blog = await blogDoc.save();

    res.status(200).json({
      success: true,
      message: `Votre blog a été mis à jour avec succès!`,
      blog
    });
  } catch (error) {
    res.status(400).json({
      error: "Votre demande n'a pas pu être traitée. Veuillez réessayer."
    });
  }
});

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
