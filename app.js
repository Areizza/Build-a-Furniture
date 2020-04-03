const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const io = require('socket.io')(server); // get package and instantiate with server

const LISTEN_PORT = 8080;

app.use(function (req, res, next)
{
    res.set('X-Clacks-Overhead', 'GNU Terry Pratchet');
    next();
});

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

// Routes
app.get('/', function(req, res) 
{
    res.sendFile(__dirname + '/public/index.html');
});

 app.get('/livingroom', function(req, res) 
 {
     res.sendFile(__dirname + '/public/livingroom.html');
 });

 app.get('/warehouse', function(req, res) 
 {
     res.sendFile(__dirname + '/public/warehouse.html');
 });

// Websocket events
io.on('connection', function(socket)
{
    console.log(socket.id + ' has connected');

    //socket.broadcast.emit('playerConnect');
    
    socket.on('disconnect', function(data)
    {
        console.log(socket.id + ' has disconnected');
        //socket.broadcast.emit('playerDisconnect');
    });

    // Custom events
    socket.on('buildChosen', function (data)
    {
        socket.broadcast.emit('setBuild', data);
    });

    socket.on('sendInstructs', function (data)
    {
        socket.broadcast.emit('nextStep', data);
    });

    socket.on('sendPiece', function(data)
    {
        socket.broadcast.emit('spawnPiece', data);
    });

    socket.on('buildComplete', function (data)
    {
        socket.broadcast.emit('endGame');
    });
});

// Start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);