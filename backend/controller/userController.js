const User =require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signin =async (req,res)=>{
    const{email,password} = req.body;

    try{

        const getUser =await  User.findOne({email});
        if (!getUser) return res.status(404).json({message:"user not found"});

        const isPassCorrect = await  bcrypt.compare(password,getUser.password);
        if(!isPassCorrect) return res.status(404).json({message:"Invalid password"});

        const token = jwt.sign({email: getUser.email,id:getUser.id},'test',{expiresIn:'1h'});

        res.status(200).json({result:getUser,token:token});

    }catch (e) {

        res.status(500).json({message: "Server error" + e});

    }
}
const signup =async (req,res)=>{
    const {email,password,conPass,firstName,lastName,type} =req.body;
    const name = firstName + " " + lastName;
    try{

        const getUser =await  User.findOne({email});
        if (getUser) return res.status(404).json({message:"user already exist"});

        if(password !== conPass) return  res.status(404).json({message:"password miss match"});

        const hashpassword  = await  bcrypt.hash(password,12);
        const result = await User.create({email,password:hashpassword,name:name,type:type });
        console.log("user : " +email + password + conPass + firstName + lastName +type);
        const token = jwt.sign({email: result.email,id:result.id},'test',{expiresIn:'1h'});
        res.status(200).json({result,token});

    }catch (e) {

        res.status(500).json({message: "Server error" + e});

    }
}

module.exports = {
    signup,
    signin,
};
