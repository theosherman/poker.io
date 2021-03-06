var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

io.on('connection', function(socket) {
    console.log(`${socket.id} connected`)

    socket.on('host', (gameId) => {
        console.log(gameId)
        socket.join(gameId)
    })

    socket.on('join', (gameId) => {
        socket.join(gameId)
        io.to(gameId).emit('join', socket.id)
    })
})

server.listen(3000, () => {
    console.log('listening on port 3000')
})