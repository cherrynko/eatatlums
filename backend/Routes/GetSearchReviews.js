const express = require("express");
const app = express();
const router = express.Router();

const Review = require("../models/Reviews");

app.use(express.json());

// GET route for searching reviews
app.get("/getsearchreviews/:searchTerm", async (req, res) => {
    const searchTerm = req.params.searchTerm;

    try {
        // Query the Reviews collection for matching reviews
        const reviews = await Review.find({
            review: { $regex: searchTerm, $options: "i" },
        });

        // Return matching reviews as a JSON response
        res.json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

module.exports = router;
