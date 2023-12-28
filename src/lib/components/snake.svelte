<script lang="ts">
	import init, { startSnake, resetSnake, renderBoard } from 'snake';
	import { onMount } from 'svelte';

	let launched = false;

	onMount(async () => {
		await init();
		renderBoard();
	});

	const handleButton = () => {
		if (launched) {
			resetSnake();
		} else {
			startSnake();
			launched = true;
		}
	};
</script>

<div class="flex flex-col items-center">
	<div id="root" class="rounded-md bg-gray-100 p-2 dark:bg-gray-900" />
	<button class="mt-4 rounded-md bg-red-400 px-3" on:click={handleButton}
		>{launched ? 'Reset the game' : 'Start the game'}</button
	>
</div>
