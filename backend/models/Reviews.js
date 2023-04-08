const mongoose = require("mongoose")
const { Schema } = mongoose;

const ReviewSchema = new Schema({

    id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name:
    {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'User'
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
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('Reviews', ReviewSchema);