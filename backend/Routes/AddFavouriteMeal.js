const express = require("express");
const router = express.Router()
const FavouriteMeals = require("../models/FavouriteMeals")
const { body, validationResult } = require('express-validator');

router.post('/addfavmeal', async (req, result) => {
    try {
        console.log(req.body)
        await FavouriteMeals.create({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            item: req.body.item,
            eatery: req.body.eatery

        })
        result.json({ success: true });
    } catch (error) {
        console.log("error with adding favourite meal.", error)
        result.json({ success: false });
    }
})

module.exports = router;