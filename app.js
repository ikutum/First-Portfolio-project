const mongoose = require('mongoose');
const express=require('express');
const authRoutes =require('./routes/authRoutes.js');
const resourceRoutes= require('./routes/resourceRoutes.js');
require('dotenv').config();

const app= express();

app.use(express.json());
app.use('/authRoutes', authRoutes);
app.use('/resourceRoutes',resourceRoutes);
const PORT = process.env.PORT||5000;                       //port

url = 'mongodb+srv://kalsoom:kutum06@cluster0.0v9buxt.mongodb.net/';                  //DATABASE CONNECTION
mongoose.connect(url,
    {useNewUrlParser:true,
     useUnifiedTopology:true,})
    .then(()=>
    console.log("Database connected"))
    .catch(err =>
        console.log(`Error connecting to the database ${err}`));
    

app.listen(PORT,()=>{                                             //PORT LISTENING
    console.log(`server is listening at port ${PORT}`);
});
