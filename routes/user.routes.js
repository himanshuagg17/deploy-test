const express=require("express");
const bcrypt=require("bcrypt");
const { UserModel } = require("../models/user.model");
const jwt=require("jsonwebtoken");

const UserRouter=express.Router();


// registering the user , hashing the password and then passing the data in user and saving it.
UserRouter.post("/register",(req,res)=>{
    const {name,email,password}= req.body;

    try{
        bcrypt.hash(password,5, async(err,hashedpassword)=>{
            if(err){
                res.send("the user could be registered")
            }
            else{
                const user=new UserModel({name,email,password:hashedpassword});
                await user.save();
                res.status(201).send("the user has been successfully registered");
            }
        })
    }
    catch(err){
        res.send(err.message);
    }
})



// the login route

UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.find({email});
 
    if(user.length>0){
       

        try{
          bcrypt.compare(password,user[0].password,(err,result)=>{

            if(err){
                res.send("the password did not match");
            }
            else{
                const token=jwt.sign({userID:user[0]._id},"himanshu",{expiresIn:"3d"});
                res.status(201).send({"message":"User successfully logged in","token":token});
            }


          })
        }
        catch(err){
           res.send(err.message);
        }
    }
})


module.exports={
    UserRouter
}