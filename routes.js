const express = require('express')
const server = require('./server')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getPeople()
      .then(people => {
        //   console.log(people)
        res.render('index', {people:people})

        })
  })

router.get('/people/:id', (req,res) =>{
    var id = req.params.id
    db.getPerson(id)
    .then(person =>{
        console.log("this is the id: " + person.id)
        db.getChildren(person.id)
        .then(children =>{
        console.log(children)
        
        res.render('profile', {person:person,children:children})
        console.log({person:person})
        })
    })
})

router.get('/people/:id/new', (req,res) =>{
    var id = req.params.id
    db.getPerson(id)
    .then(person =>{
    res.render('new', person)
    })
})

module.exports = router