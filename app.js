const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const mongoose = require('mongoose');
const dbConnection = require('./config/db');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cookieParser());
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/posts', postRoutes);
app.use('/users', userRoutes);







app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})