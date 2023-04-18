const express = require('express');
const router = express.Router();
const Reviews = require("../models/Reviews")

// route for searching reviews
router.get('/search', async (req, res) => {
    const query = req.query.q;
    console.log("Received Search Query For:", query);
    try {
        const results = await Reviews.find({ review: { $regex: query, $options: 'i' } });
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
