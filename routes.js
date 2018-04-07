const express = require('express')
const server = require('./server')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getPeople()
      .then(people => {
          console.log(people)
        res.render('index', {people:people})

        })
  })


module.exports = router