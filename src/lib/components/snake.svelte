<script lang="ts">
	import init, { launch, reset } from 'snake';
	import { onMount } from 'svelte';

	let launched = false;

	onMount(() => {
		init();
	});

	const launchGame = () => {
		launch();
		launched = true;
	};

	const resetGame = () => {
		reset();
	};
</script>

<div class="flex flex-col items-center">
	<div id="root" class="rounded-md bg-gray-100 p-2 dark:bg-gray-900" />
	{#if launched}
		<button class="mt-2 rounded-md bg-red-800 px-3 text-white" on:click={resetGame}>Reset</button>
	{:else}
		<button class="mt-2 rounded-md bg-red-800 px-3 text-white" on:click={launchGame}>Launch</button>
	{/if}
</div>
