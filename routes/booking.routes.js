const expres=require("express");
const { BookingModel } = require("../models/booking.model");

const BookingRouter=expres.Router();

BookingRouter.post("/booking",async (req,res)=>{
    const bookingdetails={
        user:req.body.user_Id,
        flight:req.body.flight
    }

    try{
        const booking=new BookingModel(bookingdetails);
        await booking.save();
        res.status(201).send({"msg":"flight has been booked"});
    }
    catch(err){
       res.status(500).json({"msg":err.message});
    }
})


// dashboard

BookingRouter.get("/dashboard",async (req,res)=>{
    try{
        let bookings=await BookingModel.find();
        res.status(200).send(bookings);
    }
    catch(err){
        res.status(500).json({"msg":err.message});
    }
})



module.exports={
    BookingRouter
}