const mongoose = require("mongoose")
const { Schema } = mongoose;

const ReviewSchema = new Schema({

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

    review:
    {
        type: String,
        required: true
    },
    rating:
    {
        type: Number,
        required: true
    },
    date:
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

module.exports = mongoose.model('Reviews', ReviewSchema);