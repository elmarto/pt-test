const models  = require('../models');
const express = require('express');

const router  = express.Router();
const root = router.get('/', function(req, res) { res.json({ api: 'v1' }); });

const client  = require('./client');
const provider  = require('./provider');

module.exports = {
  root: root,
  client: client,
  provider: provider
};