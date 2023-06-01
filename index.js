const express=require("express");
require("dotenv").config();
const {connection}=require("./configs/db");
const {UserRouter}=require("./routes/user.routes")
const {FlightRouter}=require("./routes/flight.routes");
const {authenticate}=require("./middlewares/authenticate")
const {BookingRouter}=require("./routes/booking.routes");

const app=express();


// middleware to parse the json data
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("flights booking app");
})
app.use("/api",UserRouter);



app.use(authenticate);

app.use("/flight",FlightRouter);
app.use("/booking",BookingRouter)

app.listen(process.env.port,async()=>{

    await connection;
    console.log(`The server is running at ${process.env.port}`);
})