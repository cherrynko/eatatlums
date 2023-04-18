
const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../secrets/JWTsecret.js");



router.post("/createuser", [

    //  validating user details
    body('name', 'name must minimum 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'passowrd must be minimum 6 characters').isLength({ min: 6 }),
],
    async (req, result) => {


        // executing validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return result.status(400).json({ errors: errors.array() });
        }

        // checking idf user already exists
        let id = req.body.id;
        const existingUser = await User.findOne({ id });
        if (existingUser) {
            return result.status(400).json({ errors: [{msg: "User already exists"}] }); 
        }


        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);


        // inserting new user
        try {
            const user = await User.create({
                id: req.body.id,
                name: req.body.name,
                contact: Number(req.body.contact),
                email: req.body.email,
                password: hashPass,

            })

            // sending true if insertion was successful
            result.json({ success: true });


        } catch (error) {
            // sending false if insertion was unsuccessful
            result.json({ success: false });
        }
    })


    router.post("/loginuser",async(req,result)=>{
        let id = req.body.id;
        try 
        { 
            let user = await User.findOne({id})
            if (!user){
                return result.status(400).json({ errors: [{msg: "Invalid Username or Password"}] })
            }
            else{

                // comparing hashes
                bcrypt.compare(req.body.password, user.password, function (err, checkRes) {

                    // in case of general error
                    if (err) throw err;
                    
                    //incase hash doesn't match with given hash of given password 
                    if (!checkRes) {
                        return result.status(400).json({ errors: [{msg: "Invalid Username or Password"}] })
                    }

                    // in case the hash matches
                    if (checkRes) {

                        // setting up the JWT Token
                        const data = {
                            user: {
                                id: user.id
                            }
                        }

                        const authToken = jwt.sign(data, JWT_SECRET,{
                            expiresIn: 259200
                        });
                        
                        //sending the signed JWT token 
                       return result.json({authToken});
                    }
    
                });
            }    
        } 
        catch (error) {
            throw error
        }
    })

    

module.exports = router