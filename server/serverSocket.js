module.exports = io => {
    io.on('connection', socket => {
        console.log('Server Socket Running', socket.id)
        socket.on('disconnect', function() {
            console.log('Server Socket Disconnected')
        })
    });
}