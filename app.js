var express = require('express');
    path = require('path');

var app = express();

app.use(express.static('public'));
app.use(function(req,res,next) {
    console.log(req.method + ' request for ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/experience', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/*', function(req, res) {
    res.redirect('/');
});

app.listen(3000);
console.log('express app running on port 3000');

module.exports = app;
