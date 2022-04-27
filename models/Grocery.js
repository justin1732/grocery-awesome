//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema
const GrocerySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//Grocery Variable
const Grocery = mongoose.model("Grocery", GrocerySchema);

//And export
module.exports = Grocery;
