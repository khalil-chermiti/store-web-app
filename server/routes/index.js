const router = require('express').Router();
const apiRoutes = require('./api');
const express = require('express');
const path = require('path');

const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `/${apiURL}`;

// Define your API routes
router.use(api, apiRoutes);

// Handle 404 for API routes
router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
