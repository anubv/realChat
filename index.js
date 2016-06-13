var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);


var routes = require('./routes/home');
var users = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/users', users);
app.use('/', routes);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('message', function (data) {
        console.log(data);
        io.emit('msg', data);
    });
});


http.listen(80, function () {
console.log('server runninng');    
});

