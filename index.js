//requiring express
const express = require('express')
//initializing app variable
const app = express ()
//connecting to .env file
require('dotenv').config()

//Defining view engine, jsx, that we are using
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Middleware
app.use('/places', require('./controllers/places'))

//GET homepage route
app.get('/', (req, res) => {
    res.render('home')
})

//GET 404 page route
//changed from 404 status code from express
//to res.render our views/error404
app.get('*', (req, res) => {
    res.render('error404')
})

//telling our app to listen to our encrypted port
app.listen(process.env.PORT)