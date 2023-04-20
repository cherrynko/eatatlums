const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
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
    contact:
    {
        type: Number,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    deliveryStatus: // to check if the user would be able to take deliveries or not
    {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('User', UserSchema);


