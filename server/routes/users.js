const router = require('express').Router()
const {User} = require('../db/models/models.js')

router.get('/users', function(req,res,next){
    User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

module.exports = router;