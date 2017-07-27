const express = require('express');
const router = express.Router();
require('dotenv').config();
const queries = require('../db/queries')
const validators = require('./validators')

router.get('/', (req, res)=>{
  queries.getAllCats()
    .then(cats => {
      res.send(cats)
    })
})

router.get('/:id', (req, res) =>{
  queries.getOneCat(req.params.id)
    .then(cat => {
      res.send(cat)
    })
})

router.post('/', (req, res)=>{
  queries.getOwnerByPhone(req.body.phone)
    .then(owner =>{
        queries.addCat(req.body, owner.id)
          .then(id =>
            res.send({'id': id})
        )
    })
})

router.put('/:id', (req, res)=>{
  queries.updateCat(req.params.id, req.body)
    .then(cat => {
        res.send(cat)
      }
    )
})

router.delete('/:id', (req, res)=>{
  queries.removeCat(req.params.id)
    .then(
      res.send({message: "Removed."})
    )
})

module.exports = router;
