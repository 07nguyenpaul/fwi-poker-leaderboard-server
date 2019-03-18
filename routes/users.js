const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users');

router.post('/', usersController.create);

router.get('/', usersController.index);
router.get('/:id', usersController.show);

router.put('/:id', usersController.update);

module.exports = router;
