var express = require('express');
var router = express.Router();
const wrap = require('express-async-wrap');
const models = require('../models');

/* GET users listing. */
router.get('/', wrap(async (req, res) => {
  const users = await models.user.findAll();
  res.send(users);
}));

module.exports = router;
