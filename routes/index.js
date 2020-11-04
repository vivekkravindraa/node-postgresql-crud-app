var express = require('express');

var playersController = require('../app/controllers/playersController');

var router = express.Router();

router.get('/players', playersController.getAllPlayers);
router.post('/players', playersController.createPlayer);
router.get('/players/:id', playersController.getSinglePlayer);
router.put('/players/:id', playersController.updatePlayer);
router.delete('/players/:id', playersController.deletePlayer);

module.exports = { router };