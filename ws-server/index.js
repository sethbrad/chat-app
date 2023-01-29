const express = require('express');
const http = require('http');
const ws = require('ws');

const app = express();

const server = http.createServer(app);

const wss = new ws.WebSocketServer({ server });

wss.on('connection', (ws) => {
	ws.on('message', (message) => {
		console.log('received: %s', message);
		ws.send(`Hello, you sent -> ${message}`);
	});

	ws.send('Hi there, I am a WebSocket server');
});

server.listen(process.env.PORT || 9090, () => {
	console.log(`Server started on port ${server.address().port} :)`);
});
