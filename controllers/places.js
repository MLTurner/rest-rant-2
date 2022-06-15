//creating a variable that creates a new router object
//this object will handle client requests
const router = require('express').Router()
const places = require('../models/places.js')

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



// DELETE /places/:id
/*router.delete("/:id", (req, res) => {
    let id = Number(req.params.id)
      .then((place) => {
        res.redirect("/places");
      })
      .catch((err) => {
        console.log("err", err);
        res.render("error404");
      });
  });*/

router.get('/', (req, res) =>{
    res.render('places/index', { places })
})

//Route for new place
router.get('/new', (req, res) => {
    res.render('places/new')
})


router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places stub')
  })

  
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

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

//delete a place
router.delete('/places/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})


router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router