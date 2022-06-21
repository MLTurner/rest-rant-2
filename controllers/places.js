//creating a variable that creates a new router object
//this object will handle client requests
const router = require('express').Router()
const places = require('../models/places.js')

//get index of places
router.get('/', (req, res) =>{
    res.render('places/index', { places })
})


//post a new place
router.post('/', (req, res) => {
    if (!req.body.pic) {
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state){
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})


//Route for a new place
router.get('/new', (req, res) => {
    res.render('places/new')
})

//show a place (individual page with edit/ delete buttons)
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }

    else if (!places[id]){
        res.render('error404')
    }

    else {
    res.render('places/show', { place: places[id], id })
    }
})

//form page for editing an existing place
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id })
        }
})

//Route to update a particular place after entering changes
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    } 
    else{
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }  
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })

  
//Editing and putting in boilerplate info in case user does not fill out fields
router.put('/:id/', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else{
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }  
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
   
})

  //delete a place
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice([id], 1)
        res.redirect('/places')
    }
})

/*router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places stub')
  })*/





router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router