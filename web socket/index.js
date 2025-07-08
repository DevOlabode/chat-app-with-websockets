const express = require('express');
const app = express();
const socket= require('socket.io');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));    

const server = app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

//Static Files 
app.use(express.static('public'));

//Routes
app.get('/', (req, res)=>{
    res.render('index');
})

//Socket.io setup
const io = socket(server);

io.on('connection', (socket)=>{
    // console.log('Connection successful', socket.id);

    // Listen for chat event
    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data)
    });

    // Listen for typing event
    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data);
    })
});