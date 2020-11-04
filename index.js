var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var file = require('fs-extra')
var path = require('path')
var app = express()

var { router } = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

const logCreate = file.createWriteStream(path.join('./logs', 'access.log'), {
  flags: 'a',
});

app.use(
  morgan(
    (tokens, req, res) => {
      return `${tokens.status(req, res)} ${tokens.method(req, res)} ${tokens.url(req, res)} for ${
        req.ip
      } at ${new Date()} ${tokens.res(
        req,
        res,
        'content-length'
      )} in ${tokens['response-time'](req, res)} ms thro' ${tokens[
        'user-agent'
      ](req, res)}`;
    },
    { stream: logCreate }
  )
);

app.use('/', router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal server error');
});

app.listen(3000, function(){
  console.log('Application listening on port 3000!')
})

app.get("/", (req, res) => {
  res.send("Welcome to the world of Node & PostgreSQL!");
})
