import type { Actions } from './$types';
import { WebSocket } from 'ws';

export const actions: Actions = {
	default: async (event) => {
		console.log('submitted the form...', event.request);

        const ws = new WebSocket('ws://localhost:9090');

        ws.on('open', () => {
            ws.send('blah');
        });

        ws.on('message', data => {
            console.log('received: ', data);
        });
	}
};
