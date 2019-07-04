var express = require('express');
var router = express.Router();
const wrap = require('express-async-wrap');
const models = require('../models');

/* GET users listing. */
// Get all users
router.get('/', wrap(async (req, res) => {
  const users = await models.user.findAll();
  res.send(users);
}));

// Create new user
router.post('/addUser', wrap(async (req, res) => {
  const user = await models.user.create(req.body);
  if (user) {
    res.send ({
      result: true
    });
  } else {
    res.send({
      result: false
    });
  }
}));

module.exports = router;
