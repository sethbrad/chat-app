import { Server } from 'socket.io';

export const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.on('message', (message) => {
				io.emit('message', {
					message
				});
			});
		});

		console.log('SocketIO started!');
	}
};
