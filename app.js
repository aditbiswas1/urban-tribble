var express = require('express')
  , app = express()
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , expressSession = require('express-session')
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.get('/', function(request, response){
  response.send('<h1>Hello World</h1>');
});

server.listen(8000);  

io.on('connection', function(socket){
  io.emit('welcome', {for: 'everyone'});
  socket.on('disconnect', function(){
    console.log('A connection disconnected');
  });
});
