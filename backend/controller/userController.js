const User =require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * sign in controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */

const signin =async (req,res)=>{
    const{email,password} = req.body;

    try{

        //find user by email
        const getUser =await  User.findOne({email});
        if (!getUser) return res.status(404).json({message:"user not found"});

        //check is input password and data base password both are same
        const isPassCorrect = await  bcrypt.compare(password,getUser.password);
        if(!isPassCorrect) return res.status(404).json({message:"Invalid password"});

        //get user
        const token = jwt.sign({email: getUser.email,id:getUser.id},process.env.USERSTRING,{expiresIn:'1h'});

        res.status(200).json({result:getUser,token:token});

    }catch (e) {

        res.status(500).json({message: "Server error" + e});

    }
}
/**
 * sign up controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const signup =async (req,res)=>{

    //get date from request body
    const {email,password,conPass,firstName,lastName,type} =req.body;
    const name = firstName + " " + lastName;

    try{

        //check user is already exist
        const getUser =await  User.findOne({email});
        if (getUser) return res.status(404).json({message:"user already exist"});

        //check password and conform password is the same
        if(password !== conPass) return  res.status(404).json({message:"password miss match"});

        //hash password for security security level 12
        const hashpassword  = await  bcrypt.hash(password,12);

        //create user
        const result = await User.create({email,password:hashpassword,name:name,type:type });
        console.log("user : " +email + password + conPass + firstName + lastName +type);
        const token = jwt.sign({email: result.email,id:result.id},process.env.USERSTRING,{expiresIn:'1h'});
        res.status(200).json({result,token});

    }catch (e) {

        res.status(500).json({message: "Server error" + e});

    }
}

/**
 * export controllers
 * @type {{signin: signin, signup: signup}}
 */
module.exports = {
    signup,
    signin,
};
