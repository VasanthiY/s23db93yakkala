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
        min: 4,
        max: 80
    }
})
module.exports = mongoose.model("Muffin", muffinSchema)