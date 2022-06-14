//connecting to .env file
require('dotenv').config()

//requiring express
const express = require('express')
//initializing app variable
const app = express ()

//requiring method-override
const methodOverride = require('method-override')

//Defining view engine, jsx, that we are using
//Assigning a property
//app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))
//Tool to decrypt certain data when it is received
app.use(express.urlencoded({ extended: true }))

//specifies "_method" as the keyword to change methods when we need to
app.use(methodOverride('_method'))

//Middleware
app.use('/places', require('./controllers/places'))


//GET homepage route
//'home' is the name of the view we just created -> home.jsx , aka the file name
//Note: You don't have to specify the 'views' folder. 
//It already knows to look for a 'views' folder when you call the render method!
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