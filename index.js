//requiring express
const express = require('express')
//initializing app variable
const app = express ()
//connecting to .env file
require('dotenv').config()

//Middleware
app.use('/places', require('./controllers/places'))

//GET homepage route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//GET 404 page route
//404 status code is from express
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//telling our app to listen to our encrypted port
app.listen(process.env.PORT)