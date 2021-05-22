const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

/**
 * authentication middleware
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const  auth = async (req ,res,next)=>{

    try{
        //get user token
        const token = req.header.authorization.split("")[1];
        const authonthicate = token.length < 500;

        let decodeData;

        //if roken is valid
        if(token && authonthicate){
            decodeData = jwt.verify(token,process.env.USERSTRING);
            req.userId = decodeData?.id;
        }
        //if token is invalid
        else
            {
            decodeData = jwt.decode(token);
            req.userId = decodeData?.sub;
        }

        next();

    }catch (e) {
        console.log(e);
    }
}

export default auth;