const mongoose = require("mongoose")
const {Schema} = mongoose;

const EateriesSchema = new Schema({
    eatery_id:
    {
        type: Number,
        required:true
    },
    name:
    {
        type: String,
        required:true
    },
    contact:
    {
        type: Number,
        required: true
    },
    admin_username:
    {
        type:String,
        // required:false
    },
    admin_password:{
        type: String,
        // required:false
    }
})

module.exports = mongoose.model('Eateries', EateriesSchema);


