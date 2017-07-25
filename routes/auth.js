const express = require('express');
const router = express.Router();
require('dotenv').config();
const queries = require('../db/queries')
const validators = require('./validators')
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')

router.post('/signup', (req, res, next) => {
  let data = req.body
  if(validators.validUser(data)){
    queries.getOwnerByPhone(validators.formatPhone(data.phone))
    .then(owner => {
      console.log(owner)
      if(owner){
        res.status(400)
        next(new Error('User Exists'))
      }
      else{
        bcrypt.hash(data.password, salt)
          .then(hash => {
            const owner = {
              name: data.name,
              password: hash,
              phone: validators.formatPhone(data.phone)
            }
            queries.addUser(owner)
              .then (id => {
                jwt.sign({
                  id
                }, process.env.TOKEN_SECRET, {expiresIn: '2h'}, (err, token)=> {
                  res.json({
                    token
                  })
                })
              })
          })
        }
      })
    }
    else {
      res.status(400)
      next(new Error('Invalid Submission'))
    }
  })

router.post('/login', (req, res, next) => {
  let data = req.body;
  if(validators.validLogin(data)){
    queries.getOwnerByPhone(validators.formatPhone(data.phone))
    .then (owner => {
      if(owner){
        bcrypt.compare(data.password, owner.password)
        .then(result=> {
          if(result){
            jwt.sign({
              id:owner.id
            }, process.env.TOKEN_SECRET, {expiresIn: '2h'}, (err, token)=>{
              res.json({
                token: token
              })
            })
          }
          else{
            res.status(401)
            next(new Error('Unauthorized'))
          }
        })
      }
      else{
        res.status(400)
        next(new Error('User does not exist.'))
      }
    })
  }
  else {
    res.status(400)
    next(new Error('Invalid Login Information'))
  }
})

module.exports= router;
