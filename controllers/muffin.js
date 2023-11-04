var Muffin = require('../models/muffinSchema');

// List of all Muffins
exports.muffin_list = async function(req, res) {
    try{
        theMuffins = await Muffin.find();
        res.send(theMuffins);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
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

// VIEWS
// Handle a show all view
exports.muffin_view_all_Page = async function(req, res) {
    try{
        theMuffins = await Muffin.find();
        res.render('muffins', { title: 'Muffin Search Results', results: theMuffins });
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};