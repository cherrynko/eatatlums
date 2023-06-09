const express = require("express");
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');


// localhost:4000/api/createuser
router.post("/createuser", body('email').isEmail(), body('password', 'must be minimum 5 characters').isLength({ min: 6}),async(req, result)=> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(result);
      return result.status(400).json({ errors: errors.array() });
    }
    // console.log("in backend");
    let empty = []
    // check if user already exists
    let id = req.body.id;
    const existingUser = await User.findOne({id});
    if (existingUser) {
        // console.log(result);

      return result.status(400).send('User already exists');
    }

    try {
        console.log(req.body)
        await User.create({ //just to test
            id:req.body.id,
            name:req.body.name,
            contact: Number(req.body.contact),
            email:req.body.email,
            password:req.body.password,
            
        })
    result.json({success:true});
    } catch (error) {
        console.log("error with user create.", error)
        // console.log(req.body.id);
        result.json({success:false});
    }

})


router.post("/loginuser", async(req, result)=> {
    let id = req.body.id;
    // console.log(id);
    try 
    { 
        // console.log(req.body)
        let user = await User.findOne({id})//just to test
        if (!user)
        {
            return result.status(400).send("No matching id found. Re-enter or try signing up.");
        }

        // console.log(req.body.password,user.password)
        if (!(req.body.password === user.password))
        {
            return result.status(400).send("Incorrect Password.");
        }
        
        console.log(req.body, user, "hi")

        return result.json({success:true, body:user});

    } 
    catch (error) {
        console.log("error with user login.", error)
        // console.log(req.body.id);
        return result.json({success:false});
    }

})

module.exports = router;