const express = require("express");
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');


// localhost:4000/api/createuser
router.post("/createuser", body('email').isEmail(), body('password', 'must be minimum 5 characters').isLength({ min: 6}),async(req, result)=> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return result.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.body)
        await User.create({ //just to test
            id:req.body.id,
            name:req.body.name,
            contact: Number(req.body.contact),
            email:req.body.email,
            password:req.body.password,

            // {   req must go in like this
            //     "id":24100207,
            //     "name":"Eesha Ahsen",
            //     "contact":"0324723112",
            //     "email":"eeshaahsan80@gmail.com",
            //     "password":"hihihihi"
            // }
            
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
    console.log(id);
    try 
    { 
        console.log(req.body)
        let user = await User.findOne({id})//just to test
        if (!user)
        {
            return result.status(400).json({errors: "No matching id found. Re-enter or try signing up."})
        }

        if (!req.body.password === user.password)
        {
            return result.status(400).json({errors: "Incorrect Password."})
        }

        result.json({success:true});

    } 
    catch (error) {
        console.log("error with user create.", error)
        // console.log(req.body.id);
        result.json({success:false});
    }

})

module.exports = router;