const mongoose = require("mongoose")
const { Schema } = mongoose;

const ReviewSchema = new Schema({

    id:
    {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'idModel'
    },
    idModel: {
        type: Number,
        required: true,
        enum: ['User']
    },
    name:
    {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'nameModel'
    },
    nameModel: {
        type: String,
        required: true,
        enum: ['User']
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
    }

})

module.exports = mongoose.model('Reviews', ReviewSchema);