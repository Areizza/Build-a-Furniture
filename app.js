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
    
    socket.on('disconnect', function(data)
    {
        console.log(socket.id + ' has disconnected');
    });

    socket.on('buildChosen', function (data)
    {
         console.log('Build chosen heard');
        //socket.broadcast.emit('spawnPiece', data.pieceId);
    });

    // Custom events
    socket.on('sendPiece', function(data)
    {
        console.log('Piece sent heard');
        socket.broadcast.emit('spawnPiece', data);
    });

    socket.on('progress', function(data)
    {
        console.log('Progress heard');
        socket.broadcast.emit('nextStep', data);
    });

    socket.on('buildComplete', function (data)
    {
        console.log('Build complete heard');
        socket.broadcast.emit('endGame');
    });
});

// Start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);