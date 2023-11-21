const mongoose = require("mongoose")
const muffinSchema = mongoose.Schema({
    muffin_flavour: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 1
    },
    muffin_quantity: {
        type: String,
        required: true,
        maxLength: 4,
        minLength: 1
    },
    muffin_cost: {
        type: Number,
        min: 4,
        max: 80
    }
})
module.exports = mongoose.model("Muffin", muffinSchema)