const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const  auth = async (req ,res,next)=>{

    try{
        const token = req.header.authorization.split("")[1];
        const authonthicate = token.length < 500;

        let decodeData;

        if(token && authonthicate){
            decodeData = jwt.verify(token,process.env.USERSTRING);
            req.userId = decodeData?.id;
        }else{
            decodeData = jwt.decode(token);
            req.userId = decodeData?.sub;
        }

        next();

    }catch (e) {
        console.log(e);
    }
}

export default auth;