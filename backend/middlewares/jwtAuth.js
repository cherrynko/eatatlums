const JWT_SECRET = require("../secrets/JWTsecret.js");
const jwt= require("jsonwebtoken");

const verifyJWT = (req,result, next)=>{
    
    const token = req.header('auth-token');
    if(!token){
        return result.status(400).json({error:"token required"})
    }
    else{
        jwt.verify(token,JWT_SECRET,(err,decode)=>{
            if(err){
                return result.status(400).json({error:"token required"})
            }
            else{               
                req.id= decode.user.id
                next()
            }
        })
    }
}

module.exports= verifyJWT