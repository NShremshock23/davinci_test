const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/post_demo', (req, res) => {
    res.render('post_demo', {title: 'POST Demo'});
});

app.get('/socket_demo', (req, res) => {
    res.render('socket_demo', {title: 'Websockets Demo'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});