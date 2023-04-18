const express = require("express");
const router = express.Router()
const Complaints = require("../models/Complaints")

const { body, validationResult } = require('express-validator');

router.post("/reportrider", body('complaint', 'must be minimum 1 character').isLength({ min: 2 }), async (req, result) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return result.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.body)
        await Complaints.create({
            complaintID: req.body.complaintID,
            studentID: req.body.studentID,
            orderID: req.body.orderID,
            riderID: req.body.riderID,
            complaint: req.body.complaint,
            complaintNumber: 'false'
        })
        const complaintsCount = await Complaints.countDocuments({ riderID: req.body.riderID });
        if (complaintsCount >= 3) {
            await User.updateOne({ id: req.body.riderID }, { deliveryStatus: 'false' });
        }
        result.json({ success: true });
    } catch (error) {
        console.log("error with report rider.", error)
        result.json({ success: false });
    }
});

module.exports = router;