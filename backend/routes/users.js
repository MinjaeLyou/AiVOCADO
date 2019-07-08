var express = require('express');
var router = express.Router();
const wrap = require('express-async-wrap');
const models = require('../models');

/* GET users listing. */
// Get all users
router.get('/:userId', wrap(async (req, res) => {
  console.log(req.params.userId);
  const users = await models.user.findAll({
    where: {
      userId: req.params.userId
    }
  });
  res.send(users);
}));

// Add new user
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

router.get('/score/:userId/:name', wrap(async (req, res) => {
  const score = await models.user.findOne({
    where: {
      userId: req.params.userId,
      name: req.params.name
    }
  });
  res.send(score);
}));

router.post('/score', wrap(async (req, res) => {
  const score = await models.user.update({
    score: req.body.score
  }, {
    where: {
      id: req.body.id
    }
  });
  if (score) {
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
