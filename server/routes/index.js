const router = require('express').Router();
const apiRoutes = require('./api');
const express = require('express');
const path = require('path');

const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `/${apiURL}`;

// api routes
router.use('/api/tmp/images', express.static('/tmp/images'));

// render react app
router.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
router.get(
  '/',
  express.static(
    path.join(__dirname, '..', '..', 'client', 'dist', 'index.html')
  )
);

router.use(api, apiRoutes);
router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
