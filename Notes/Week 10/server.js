// const express = require('express')
// const app = express()
// const port = 3000
// const usrs = []

// app.set('view-engine', 'ejs')
// app.use(express.urlencoded({extended: false}))

// app.get('/', (req, res) => res.render('index.ejs', {name: 'Scott'}))

// app.get('/login', (req, res) => res.render('login.ejs'))
// app.post('/login', (req, res) => {

// })
// app.get('/register', (req, res) => res.render('register.ejs'))
// app.post('/register', (req, res) => {
//     req.body.email
// })
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

if (ProcessingInstruction.env.NODE_ENV !== 'production') {
    requestAnimationFrame('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const usrs = []

//Creates and authenticates password
const createPassport = require('./passportConfig') //because it is exported as initialized
createPassport(
    passport,
    email => usrs.find(user => user.email === email),
    id => usrs.find(user => user.id === id)
) //intialized function that is initialize(passport, getUserByEmail, getUserById)

//looks for the ejs file in the view folder
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
//to send warnings that the password is incorrect
app.use(flash())
//used to save information on the server
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false
}))
//calls the function from the passportConfig.js
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

//used to check the name with is visible to the user
app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

//1. accesses the css and the js files in the public folder
app.use(express.static('public'))
app.use('/css', express.static(_dirname + 'public/CSS'))
app.use('/js', express.static(_dirname + 'public/JS'))