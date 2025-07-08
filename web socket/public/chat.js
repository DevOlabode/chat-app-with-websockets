// Make connection

const socket = io.connect('http://localhost:3000');

// Query DOM
const message = document.querySelector('#message');
const handle = document.querySelector('#handle');
const btn = document.querySelector('#send');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback');

// emit events 
btn.addEventListener('click', (evt)=>{
    socket.emit('chat', {
        message : message.value,
        handle : handle.value
    })
});

message.addEventListener('keypress', (evt)=>{
    socket.emit('typing', handle.value);
})


//Listen for events
socket.on('chat', (data)=>{
    feedback.innerHTML = '';
    message.value = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})

socket.on('typing', (data)=>{
    feedback.innerHTML = `<p><em>${data} is typing a message</em></p>`;
});