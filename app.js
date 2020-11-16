const { readdirSync } = require("fs");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');



//IMPORTS ROUTES
const postsRoute = require('./routes/posts.js');
const userRoute = require('./routes/users.js');

app.use('/posts', postsRoute);
app.use('/user', userRoute);

//Middlewares -> function that executes when routes are hit
app.use(bodyParser.json());
app.use(cors());

//HOME ROUTE (uses app)
app.get('/', (req, res)=>{
    res.send('We are on home');
});

//Connnection to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    ()=> console.log('connected to DB')
);

//CREATES SERVER LISTENER
app.listen(3000);













