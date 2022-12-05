var express = require('express');
var router = express.Router();

const productsRouter = require('./products')
const usersRouter = require('./usersLogin')

router.get('/', function(req, res, next) {
  res.json();

  router.use('/auth', usersRouter)
  router.use('/products',productsRouter)

});

module.exports = router;
