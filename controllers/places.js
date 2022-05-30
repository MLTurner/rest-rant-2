//creating a variable that creates a new router object
//this object will handle client requests
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router