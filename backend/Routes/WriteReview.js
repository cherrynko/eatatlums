const express = require("express");
const router = express.Router()
const Reviews = require("../models/Reviews")

const { body, validationResult } = require('express-validator');


router.post("/writereview", body('review', 'must be minimum 1 character').isLength({ min: 2 }), async (req, result) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return result.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.body)
        await Reviews.create({ //just to test
            id: req.body.id,
            name: req.body.name,
            date: req.body.date,
            rating: req.body.rating,
            review: req.body.review

        })
        result.json({ success: true });
    } catch (error) {
        console.log("error with write review.", error)
        // console.log(req.body.id);
        result.json({ success: false });
    }

})


module.exports = router;