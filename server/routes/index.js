const router = require('express').Router();
const apiRoutes = require('./api');
const express = require('express');
const path = require('path');

const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `/${apiURL}`;

// Serve static files from the React app
router.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

// Define your API routes
router.use(api, apiRoutes);

// Serve the React app for any other routes
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

// Handle 404 for API routes
router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
