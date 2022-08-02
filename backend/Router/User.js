const express = require('express')
const UserRoute = express.Router();
const bcrypt = require('bcryptjs')
const Token  = require('../JWTfunc')
const User = require('../Schema/UserSchema')


////////////////////    Sign Up user    ///////////////////////////
UserRoute.post('/signup' , async (req , res)=>{
    try {
        const something = await User.findOne({email:req.body.email})
        if(something){
            res.status(500).send("Should have a Unique key")
        }
        else{
            const newUser = await User.create({
                name:req.body.name,
                email:req.body.email,
                password: bcrypt.hashSync(req.body.password)
            });
            res.send({
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                token:Token(newUser)
            })
        }
    } 
    catch (error) {
        res.send(error)
    }
       

})

  ///////////////////////////////////    Login    /////////////////////////////////////
  UserRoute.post('/login' , async (req , res)=>{
      try {
          const userEmail = await User.findOne({email: req.body.email})
          if(!userEmail){
              res.send('Invalid email or password')
          }
          else{
              const user = await bcrypt.compareSync(req.body.password , userEmail.password)
              if(user){
                  res.send({
                    _id:user._id,
                    name: user.name,
                    email: user.email,
                    token: Token(user)
                  })  
              }
              else{
                  res.send('Invalid email or password')
              }
          }
          

      }
       catch (error) {
          res.status(500).send(error)
      }
  })



module.exports = UserRoute;