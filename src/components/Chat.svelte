<script lang="ts">
	import { onMount } from 'svelte';
	import { socket } from '$lib/utils/socketClient';

	let messages: string[] = [];
	let textfield = '';

	onMount(() => {
		socket.on('message', ({ message }) => {
			messages = [...messages, message];
		});
	});

	function sendMessage() {
		const message = textfield.trim();
		if (!message) return;

		textfield = '';
		socket.emit('message', message);
	}
</script>

<section>
	<div class="w-full m-5 bg-gray">
		<ul>
			{#each messages as message}
				<li>{message}</li>
			{/each}
		</ul>
	</div>

	<div class="w-full m-5 flex">
		<form action="#" on:submit|preventDefault={sendMessage}>
			<label for="msg">Chat:</label>
			<input bind:value={textfield} type="text" class="m-5 bg-yellow" />
		</form>
	</div>
</section>

<style>
</style>
