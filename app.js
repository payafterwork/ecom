const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


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



 // middlewares
 app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());   


const port = process.env.PORT || 8000

app.listen(port,()=>{
	console.log(`Server on port ${port}`);
}) 