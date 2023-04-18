const mongoose = require("mongoose")
const { Schema } = mongoose;

const FavouriteMealsSchema = new Schema({

    id:
    {
        type: Number,
        required: true
    },
    name:
    {
        type: String,
        required: true
    },

    email:
    {
        type: String,
        required: true
    },

    contact:
    {
        type: Number,
        required: true
    },
    item:
    {
        type: String,
        required: true
    },

    eatery:
    {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('FavouriteMeals', FavouriteMealsSchema);