const express = require("express");
const router = express.Router()
const FavouriteMeals = require("../models/FavouriteMeals")
const { body, validationResult } = require('express-validator');

const accountSid = 'AC306c0361a7e0a767582f267967258cbd';
const authToken = '52c219bc70e5fc6868d68a6077c1908b';
const client = require('twilio')(accountSid, authToken);

router.post('/sendfavmealalert', async (req, res) => {
    const userId = req.body.id;
    try {
        const user = await FavouriteMeals.findOne({ id: userId }, { item: 1, contact: 1 });

        if (user) {
            const message = `Your favorite meal/s (${user.item.join(', ')}) is/are available.`;
            await client.messages.create({
                body: message,
                from: '+16205368352',
                to: user.contact
            });

            res.status(200).json({ message: 'SMS sent successfully.' });
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error sending SMS.' });
    }
});