var Muffin = require('../models/muffinSchema');

// List of all Muffins
exports.muffin_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Muffin list');
};

// for a specific Muffin.
exports.muffin_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Muffin detail: ' + req.params.id);
};

// Handle Muffin create on POST.
exports.muffin_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Muffin create POST');
};

// Handle Muffin delete form on DELETE.
exports.muffin_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Muffin delete DELETE ' + req.params.id);
};

// Handle Muffin update form on PUT.
exports.muffin_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Muffin update PUT' + req.params.id);
};