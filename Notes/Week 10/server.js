const express = require('express')
const app = express()
const port = 3000
const usrs = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => res.render('index.ejs', {name: 'Scott'}))

app.get('/login', (req, res) => res.render('login.ejs'))
app.post('/login', (req, res) => {
    
})