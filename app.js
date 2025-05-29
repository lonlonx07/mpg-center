const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 10001;
app.use(express.static(__dirname+'/public'));
const mod_gvar = require('./assist_modules/gvar');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('set_selected_player', id => {
        tmp_str = id.split("-")
        mod_gvar.set_player_selected(tmp_str[0], tmp_str[1], tmp_str[2])
	});

	socket.on('get_lobby_status', id => {
        io.emit("set_lobby_status", mod_gvar.get_player_status());
	});
});

http.listen(port, () => {
    //console.log(`Socket.IO server running at http://localhost:${port}/`);
});