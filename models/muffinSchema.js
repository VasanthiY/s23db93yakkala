const mongoose = require("mongoose")
const muffinSchema = mongoose.Schema({
    muffin_flavour: {
        type: String,
        required: true
    },
    muffin_quantity: {
        type: String,
        required: true
    },
    muffin_cost: {
        type: Number,
        min: 2,
        max: 100
    }
})
module.exports = mongoose.model("Muffin", muffinSchema)