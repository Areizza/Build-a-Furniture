const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO = require('socket.io')(server); // get package and instantiate with server

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/', function(req, res) 
{
    res.sendFile(__dirname + '/public/index.html');
});

// app.get('/colour', function(req, res) 
// {
//     res.sendFile(__dirname + '/public/colour.html');
// });

// app.get('/controller', function(req, res) 
// {
//     res.sendFile(__dirname + '/public/controller.html');
// });

// Websocket events
socketIO.on('connection', function(socket)
{
    console.log(socket.id + ' has connected');

    socket.on('disconnect', function(data)
    {
        console.log(socket.id + ' has disconnected');
    });

//     // Custom events
//     socket.on('redEvent', function(data)
//     {
//         console.log('red event heard');
//         socketIO.sockets.emit('colourChangeEvent', {r:255, g:0, b:0});
//     });

//     socket.on('greenEvent', function(data)
//     {
//         console.log('green event heard');
//         socketIO.sockets.emit('colourChangeEvent', {r:0, g:255, b:0});
//     });

//     socket.on('blueEvent', function(data)
//     {
//         console.log('blue event heard');
//         socketIO.sockets.emit('colourChangeEvent', {r:0, g:0, b:255});
//     });
});

// Finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);