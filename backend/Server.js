const express = require('express');
const mongoose = require('mongoose');
const UserRoute  = require('./Router/User')
const dotenv = require('dotenv')
const cors  = require('cors')
const app = express();
///////////////////////////////////////////////////////////////////////////
dotenv.config();
const port = 5000;
///////////////////////////////////////////////////////////////
app.use(express.json());
app.use(cors());
/////////////////////////////////////////////////////////////
mongoose.connect(process.env.DB_CONNECT , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("DB Connected")
    }

})
///////////////////////////////////////////////////////////////////
app.use('/user' , UserRoute)
//////////////////////////////////////////////////////////////////
app.listen(port , ()=>{
    console.log(`We are listening you at http://localhost:${port}`)
})
