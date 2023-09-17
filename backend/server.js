require('dotenv').config();
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
const port = process.env.PORT 

//connect to db
//const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () =>{
      console.log(`Connected to MongoDB and listing on port ${port}`);
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


