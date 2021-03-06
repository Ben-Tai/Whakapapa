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

// router.get('/person/:id', (req, res) => {
//     db.getPerson(req.params.id)
//     .then(person=>{
//         db.getChildren(person.id).then(children => {
//           person.children = children
//           res.json(person)
//         })
//     })
// })

//previous version
// router.get('/people/:id', (req,res) =>{
//     var id = req.params.id
//     db.getPerson(id)
//     .then(person =>{
//         res.json(person)
//     })
//     .catch(err => console.log({err}))
// })

//ross' version
router.get('/person/:id', (req, res) => {
    console.log(req.params.id)
    db.getPerson(req.params.id)
    .then(person=>{
        db.getChildren(person.id).then(children => {
          person.children = children
          res.json(person)
        })
    })
})

// router.get('/people/:id/new', (req,res) =>{
//     var id = req.params.id
//     db.getPerson(id)
//     .then(person =>{
//     res.render('new', person)
//     })
// })

module.exports = router