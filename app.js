var express = require('express'),
    helmet = require('helmet'),
    bodyParser = require('body-parser');

var path = require('path');
var nodemailer = require('nodemailer');

var app = express();
app.disable(helmet());

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req,res,next) {
    console.log(req.method + ' request for ' + req.url);
    if(req.method == 'POST') {
        console.log('===============================');
        console.log(JSON.stringify(req.body));
        console.log('===============================');
    }
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
app.post('/email', function(req,res) {
    var transporter = nodemailer.createTransport();

    transporter.sendMail({
       from: 'sender@address',
       to: 'receiver@address',
       subject: 'hello',
       html: '<b>hello world!</b>'
       text: 'hello world!'
    });
    transporter.close();
    res.json(req.body);
});
app.get('/*', function(req, res) {
    res.redirect('/');
});



app.listen(3000);
console.log('express app running on port 3000');

module.exports = app;
