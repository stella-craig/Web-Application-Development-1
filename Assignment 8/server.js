const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let users = []; // Array to store registered users

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/tic-tac-toe', (req, res) => {
    // This should be secured and check for logged in users
    res.render('tic-tac-toe');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

// ... Previous code ...

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.redirect('/login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if(user && await bcrypt.compare(password, user.password)) {
        // Here we would normally create a session and log the user in.
        res.redirect('/tic-tac-toe');
    } else {
        res.redirect('/login');
    }
});

// ... Previous code ...
