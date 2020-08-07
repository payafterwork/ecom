const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//routes
const userRoutes = require('./routes/user');



//app
const app = express()

app.use("/api",userRoutes);

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB Connected'));


const port = process.env.PORT || 8000

app.listen(port,()=>{
	console.log(`Server on port ${port}`);
}) 