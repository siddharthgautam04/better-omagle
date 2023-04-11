const express = require("express");
const cors = require("cors");      //need cors to access cross-origin 
const server = require("http").createServer();
const io = require('socket.io')(server);   //to enable communication over http


const port = process.env.PORT || 3000;

server.listen (port, () => {
    console.log(`started on port: ${port}`);
});

const app = express();             //enabling cors access
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {       //post endpoint (not a real authentication code)
    const { username} = req.body;
    return res.json ({ username: username, secret: "sha256..." });
});

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join (data.room);
        socket.broadcast.to (data.room).emit ('user joined');
    });

    socket.on('message', (data) => {
        console.log(data);
        io.in(data.room).emit('new message',{user: data.user, message: data.message})
    });
});