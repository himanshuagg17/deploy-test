const mongoose=require("mongoose");

const BookingSchema=mongoose.Schema({
    user : { type: mongoose.Schema.ObjectId, ref: 'User' },
	flight : { type: mongoose.Schema.ObjectId, ref: 'Flight' }
})

const BookingModel=mongoose.model("bookings",BookingSchema);

module.exports={
    BookingModel
}