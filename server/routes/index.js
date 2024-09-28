const router = require('express').Router();
const apiRoutes = require('./api');
const express = require('express');

const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `/${apiURL}`;

// api routes
router.use('/api/tmp/images', express.static('/tmp/images'));

router.use(api, apiRoutes);
router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
