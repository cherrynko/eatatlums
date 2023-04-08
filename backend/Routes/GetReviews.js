const express = require("express");
const router = express.Router();
const Reviews = require("../models/Reviews");

router.get('/getreviews', async (req, res) => {
    try {
        const reviews = await Reviews.find({ eatery: 'pdc' });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
