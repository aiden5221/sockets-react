const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors);

const server = require('http').createServer(app);

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
});

io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on('join_room', (data) => {

        socket.join(data);

        // Leaves previous room after joining another
        socket.rooms.forEach((room) => {
            room !== data && room !== socket.id ? socket.leave(room) : null
        })
   
    })
    socket.on('leave_room', (data) => {
        socket.leave(data);
    })
    socket.on('send_message', (data) => {
       socket.to(data.groupNum).emit('receive_message', data);
    })

});

server.listen(3001, () => {
   console.log('Server running'); 
});


