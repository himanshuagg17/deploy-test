const jwt=require("jsonwebtoken");

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization;

    const result=jwt.verify(token,"himanshu");

    if(result){
        req.body.user_Id=result.user_Id;
        next();
    }
    else{
        res.json("token expired, login again");
    }
}

module.exports={
    authenticate
}