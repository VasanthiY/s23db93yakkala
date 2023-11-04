var express = require('express');

var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var muffin_controller = require('../controllers/muffin');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// MUFFIN ROUTES ///
// POST request for creating a Muffin. 
router.post('/muffins', muffin_controller.muffin_create_post);

// DELETE request to delete Muffin.
router.delete('/muffins/:id', muffin_controller.muffin_delete);

// PUT request to update Muffin.
router.put('/muffins/:id', muffin_controller.muffin_update_put);

// GET request for one Muffin.
router.get('/muffins/:id', muffin_controller.muffin_detail);

// GET request for list of all Muffin items.
router.get('/muffins', muffin_controller.muffin_list);

module.exports = router;