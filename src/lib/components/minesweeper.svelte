<script lang="ts">
	import init, { getState, openField, toggleFlag, resetState } from 'minesweeper';
	import { onMount } from 'svelte';

	let board: string[][] = [[]];

	onMount(() => {
		init().then(() => {
			board = update();
		});
	});

	export const reset = () => {
		resetState();
		board = update();
	};

	const update = () => {
		return getState()
			.split('\n')
			.map((row) => row.trim().split(/\s+/))
			.slice(0, -1);
	};

	const open = (e: MouseEvent, x: number, y: number) => {
		e.preventDefault();
		openField(x, y);
		board = update();
	};

	const toggle = (e: MouseEvent, x: number, y: number) => {
		e.preventDefault();
		toggleFlag(x, y);
		board = update();
	};
</script>

{#if board.length}
	<div
		class="grid-rows-10 inline-grid h-[260px] w-[260px] grid-cols-10 rounded-md bg-gray-100 p-2 dark:bg-gray-900"
	>
		{#each board as row, r}
			{#each row as cell, c}
				<button
					on:click={(e) => open(e, c, r)}
					on:contextmenu={(e) => toggle(e, c, r)}
					class="h-6 w-6 text-lg outline-none">{cell}</button
				>
			{/each}
		{/each}
	</div>
{/if}
