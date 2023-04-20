const mongoose = require("mongoose")
const { Schema } = mongoose;

const ComplaintsSchema = new Schema({
    complaintID:
    {
        type: Number,
        required: true
    },
    studentID:
    {
        type: Number,
        required: true
    },
    orderID:
    {
        type: Number,
        required: true
    },
    eatery:
    {
        type: String,
        required: true
    },
    riderID:
    {
        type: Number,
        required: true
    },
    complaint:
    {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Complaints', ComplaintsSchema);


