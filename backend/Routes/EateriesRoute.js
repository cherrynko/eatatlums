const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Eateries = require("../models/Eateries")
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../secrets/JWTsecret.js");

router.post(
  "/eateryadd",
  async (req, result) => {
    console.log(req.body , "hi")
    // inserting new user
    try {
      const user = await Eateries.create({
        eatery_id: req.body.eatery_id,
        name: req.body.name,
        contact: parseInt(req.body.contact),
        admin_username: req.body.admin_username,
        admin_password: req.body.admin_password,
      });

      // sending true if insertion was successful
      result.json({ success: true });
    } catch (error) {
      // sending false if insertion was unsuccessful
      result.json({ success: false });
    }
  }
);

router.get("/eateries", async (req, res) => {
  try {
    const eateries = await Eateries.find({});
    res.json(eateries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
