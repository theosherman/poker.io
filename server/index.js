var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

io.on('connection', function(socket) {
    console.log(`${socket.id} connected`)
})

server.listen(3000, () => {
    console.log('listening on port 3000')
})