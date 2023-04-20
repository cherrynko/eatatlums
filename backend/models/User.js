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
    banned: // to check if the user would be able to take deliveries or not
    {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', UserSchema);


