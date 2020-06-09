const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//routes
const userRoutes = require('./routes/user.js');



//app
const app = express()

//db

mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
	console.log('DB connected')
})


app.get('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port,()=>{
	console.log(`Server on port ${port}`);
}) 