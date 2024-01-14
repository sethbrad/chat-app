import express from 'express';
import http from 'http';
import {WebSocketServer} from 'ws';

const app = express();

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

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
