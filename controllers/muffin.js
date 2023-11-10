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
exports.muffin_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Muffin.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Muffin update form on PUT.
exports.muffin_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
     try {
        let toUpdate = await Muffin.findById( req.params.id)
        // Do updates of properties
        if(req.body.muffin_flavour) toUpdate.muffin_flavour = req.body.muffin_flavour;
        if(req.body.muffin_quantity) toUpdate.muffin_quantity = req.body.muffin_quantity;
        if(req.body.muffin_cost) toUpdate.muffin_cost = req.body.muffin_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
     } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
     }
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

// Handle a show one view with id specified by query
exports.muffin_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Muffin.findById( req.query.id)
        res.render('muffinsdetail', { title: 'Muffin Detail', toShow: result });
    } catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.muffin_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('muffincreate', { title: 'Muffin Create'});
    } catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.muffin_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Muffin.findById(req.query.id)
        res.render('muffinupdate', { title: 'Muffin Update', toShow: result });
    } catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};