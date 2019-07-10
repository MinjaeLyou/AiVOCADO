var express = require('express');
var router = express.Router();
const wrap = require('express-async-wrap');
const models = require('../models');

// Get word
router.get('/wordAnimal/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordAnimal.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordCountry/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordCountry.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordFood/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordFood.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordJob/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordJob.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordNature/:wordId', wrap(async (req, res) => {
  const word = await models.wordNature.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));
router.get('/wordNature/:wordId', wrap(async (req, res) => {
  const word = await models.wordNature.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordSchool/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordSchool.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordSports/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordSports.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

router.get('/wordVehicle/:wordId', wrap(async (req, res) => {
  console.log(req.params.wordId);
  const word = await models.wordVehicle.findOne({
    where: {
      wordId: req.params.wordId
    }
  });
  res.send(word);
}));

module.exports = router;
