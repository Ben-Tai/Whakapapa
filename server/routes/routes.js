const express = require('express')
const db = require('../db/db')
const router = express.Router()

const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', (req, res) => {
    db.getPeople()
    .then(people=>{
        res.json(people)
    })
})

router.get('/people/:id', (req,res) =>{
    var id = req.params.id
    console.log(req.params.id)
    db.getPerson(id)
    .then(person =>{
        console.log(person)
        res.json(person)
    })
    .catch(err => console.log(err))
})

// router.get('/people/:id/new', (req,res) =>{
//     var id = req.params.id
//     db.getPerson(id)
//     .then(person =>{
//     res.render('new', person)
//     })
// })

module.exports = router