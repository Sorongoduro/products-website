var express = require('express');
var router = express.Router();
const getAllProducts = require('../utils/productos')

/* GET home page. */
router.get('/', function(req, res, next) {
  let total = 0;
  getAllProducts((productos) => {
    res.render('index', {
      total,
      productos
    });
  })
});

module.exports = router;
