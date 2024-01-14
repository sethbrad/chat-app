<script>
	const msgs = ['hello', 'these', 'are', 'some', 'messages'];
</script>

<section>
	<div class="w-full m-5 bg-gray">
		<ul>
			{#each msgs as msg}
				<li>{msg}</li>
			{/each}
		</ul>
	</div>

	<div class="w-full m-5 flex">
		<form method="POST">
			<label for="msg">Chat:</label>
			<input name="msg" id="msg" type="text" class="m-5 bg-yellow" />
		</form>
	</div>
</section>

<style>
</style>
