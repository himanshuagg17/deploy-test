
# Air Ticket Booking

### User Model

```

{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}

```

### Flight Model

```
{
  _id: ObjectId,
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}

```

### Booking Model

```
{
    user : { type: mongoose.Schema.ObjectId,ref:'User' },
	flight : { type: mongoose.Schema.ObjectId, ref: 'Flight' }
}
```


### All the Endpoints are:

| method | endpoint | descriptoin | request body | status code |
| ---- | ---- | ---- | ---- | ---- |
| POST | /api/register/ | users can register | {name:"himanshu",email:"himanshu@gmail.com" , password: "himanshu"} | 201|
| POST | /api/login | users can login | {email:"himanshu@gmail.com",password:"himanshu} | 201 |
| GET | /api/flights | This endpoint should return a list of all available flights | not needed | 200 |
| GET | /api/flights/:id | get the flight by id | not needed | 200 |
| POST | /api/flights | post the flight data | {"airline": "Indian Airlines","flightNo": 7,"departure": "today","arrival": "tomorrow","departureTime": "2023-5-30","arrivalTime": "2023-5-31","seats": 200,"price": 4000} | 201 |
| PATCH | /api/flights/:id | patch the flight data | {"airline": "Qatar Airlines","flightNo": 7,"departure": "today","arrival": "tomorrow","departureTime": "2023-5-30","arrivalTime": "2023-5-31","seats": 200,"price": 4000} | 204 |
| DELETE | /api/flights/:id | delete the flight data | not needed | 202 |



