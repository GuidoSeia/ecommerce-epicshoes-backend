var express = require('express');
var router = express.Router();

const { getUsers, deleteUser, createUser } = require('../controllers/userController')


router.get('/', getUsers);
router.delete('/:id', deleteUser)
router.post('/', createUser);

module.exports = router;