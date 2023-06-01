const express=require("express");

const {FlightModel}=require("../models/flight.model");

const FlightRouter=express.Router();

// route to post a new flight details

FlightRouter.post("/flights",async (req,res)=>{
    const payload=req.body;

    try{
        const flight= new FlightModel(payload);
        await flight.save();
        res.status(201).send("The flight has been added");
    }
    catch(err){
        res.send("The flight could not be added");
    }
})


// to get all the flights

FlightRouter.get("/flights",async(req,res)=>{
    try{
        let flights=await FlightModel.find();
        res.status(200).send(flights);
    }
    catch(err){
        res.status(500).json({"msg":err.message});
    }
})

// to update the flight details

FlightRouter.patch("/flights/:id",async (req,res)=>{
    let id=req.params.id;

    let payload=req.body;

    try{
        await FlightModel.findByIdAndUpdate({_id:id},payload);
        res.status(204).json({"message":"The flight data was sucessfully updated"});
    }
    catch{
        res.status(500).json({"msg":err.message});
    }
})


// to delete a particular flight

FlightRouter.delete("/flights/:id",async(req,res)=>{
    let id=req.params.id;

    try{
        await FlightModel.findByIdAndDelete({_id:id});
        res.status(200).send("The flight data was sucessfully deleted");
    }
    catch(err){
        res.status(500).json({"msg":err.message});
    }
})


// get the details of a specific flight
FlightRouter.get("/flights/:id",async (req,res)=>{
    let id=req.params.id;

    try{
        const flight=await FlightModel.find({_id:id});
        res.status(200).send(flight);
    }
    catch(err){
        res.status(500).json({"msg":err.message});
    }
})



module.exports={
    FlightRouter
}