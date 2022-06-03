//creating a variable that creates a new router object
//this object will handle client requests
const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'Budacai',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/kimchi-budacai.jpg'
    }, {
        name: 'La Santa',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Mexican',
        pic: '/images/la-santa.jpg'
    }]
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

//Route for new place
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
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