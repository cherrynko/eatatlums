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
    riderID:
    {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Complaints', ComplaintsSchema);


