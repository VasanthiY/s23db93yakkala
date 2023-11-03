var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('muffins', { title: 'Search Results Muffins' });
});

module.exports = router;
