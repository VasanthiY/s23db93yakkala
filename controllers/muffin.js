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
exports.muffin_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Muffin.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Muffin create on POST.
exports.muffin_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Muffin();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"muffin_flavour":"vanilla muffin", "muffin_quantity":1, "muffin_cost":25}
    document.muffin_flavour = req.body.muffin_flavour;
    document.muffin_quantity = req.body.muffin_quantity;
    document.muffin_cost = req.body.muffin_cost;
    try{
        let result = await document.save();
        res.send(result);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
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