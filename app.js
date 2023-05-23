const express = require('express');

// express app
const app = express();

// Array to hold POST responses - TODO: replace with db?
post_responses = [];

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// Middleware, static files setup
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {title: 'Home', post_responses});
});

app.get('/post_demo', (req, res) => {
    res.render('post_demo', {title: 'POST Demo'});
});

app.post('/post_demo', (req, res) => {
    console.log(req.body);
    post_responses.push(req.body);
    res.redirect('/');
  });

app.get('/socket_demo', (req, res) => {
    res.render('socket_demo', {title: 'Websockets Demo'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});