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
)