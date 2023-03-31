const express = require("express");
const router = express.Router()
const User = require("../models/User")

// localhost:4000/api/createuser
router.post("/createuser", async(req, result)=> {
    try {
        console.log(req.body)
        await User.create({ //just to test
            id:req.body.id,
            name:req.body.name,
            contact: Number(req.body.contact),
            email:req.body.email,
            password:req.body.password,

            // {   req must go in liek this
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


module.exports = router;