const express = require('express');
const path = require('path');
const session = require('session');
const socketio = require('socket.io');
const morgan = require('morgan');
const db = require('./db/db.js');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', '/public')))

app.get('*', function (req, res, next) {
    res.status(200).send('../public/index.html');
})

//app.use('/api', require('./routes/apiroutes.js'));

const server = app.listen(port, () => {
    console.log('The server is running')
    db.sync({force:true})
  });
const io = socketio(server);

require('./serverSocket.js')(io);