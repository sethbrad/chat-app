import type { Actions } from './$types';
import { WebSocket } from 'ws';

const encoder = new TextEncoder();

export const actions: Actions = {
	default: async ({ request }) => {
		const ws = new WebSocket('ws://localhost:9090');
		const data = await request.formData();

		ws.on('open', async () => {
			console.log('Connecting to server...');
			ws.send(encoder.encode(data.get('msg')?.toString()));
		});

		ws.on('message', (data) => {
			console.log(data.toString());
		});
	}
};
