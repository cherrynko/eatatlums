const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../secrets/JWTsecret.js");
const jwtAuth= require("../middlewares/jwtAuth")



router.get("/chess", jwtAuth, async(req,res)=>{
    res.send("i love chess")
})

router.post("/mate",jwtAuth, async(req,res)=>{
    console.log("hlleo")
    res.send("indeed")
})

module.exports= router