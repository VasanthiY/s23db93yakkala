var express = require('express');
const muffin_controllers= require('../controllers/muffin')
var router = express.Router();

/* GET home page. */
router.get('/', muffin_controllers.muffin_view_all_Page );

module.exports = router;
