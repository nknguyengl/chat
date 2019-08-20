var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 7777;
var io = require('socket.io')(server);
server.listen(port, () => console.log('Server runing on port: ' + port));

io.on('connection', (socket) => {
    console.log(socket.id + ': connected');
    socket.emit('id', socket.id);

    socket.on('disconnect', () => {
        console.log(socket.id + ': disconnected');
    });

    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    socket.on('message', (data) => {
        console.log(socket.id, `${data} ${time}`);
        io.sockets.emit('message', {
            id: socket.id,
            message: data,
            created_at: time
        });
    })
});
