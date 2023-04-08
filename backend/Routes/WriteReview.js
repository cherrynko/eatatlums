const express = require("express");
const router = express.Router()
const Reviews = require("../models/Reviews")

router.post("/writereview", async (req, result) => {
    let id = req.body.id;
    console.log(id);
    try {
        console.log(req.body)
        let user = await User.findOne({ id })//just to test
        if (!user) {
            return result.status(400).json({ errors: "No matching id found. Re-enter or try signing up." })
        }

        if (!req.body.password === user.password) {
            return result.status(400).json({ errors: "Incorrect Password." })
        }

        result.json({ success: true });

    }
    catch (error) {
        console.log("error with user login.", error)
        // console.log(req.body.id);
        result.json({ success: false });
    }

})


module.exports = router;