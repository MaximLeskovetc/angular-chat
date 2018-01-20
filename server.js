const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('User connection');
    io.on('disconnect', () => {
        console.log('User disconnect');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', JSON.parse(msg));
    });
});

server.listen(port, () => {
    console.log('Server running port ' + port);
});