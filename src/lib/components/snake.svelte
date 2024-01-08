<script lang="ts">
	import init, { startSnake, resetSnake, renderBoard } from 'snake';
	import { onMount } from 'svelte';

	enum Direction {
		Up = 1,
		Down,
		Left,
		Right
	}

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

	const handleDir = (dir: Direction) => {
		let key = '0';
		switch (dir) {
			case Direction.Up:
				key = 'w';
				break;
			case Direction.Down:
				key = 's';
				break;
			case Direction.Left:
				key = 'a';
				break;
			case Direction.Right:
				key = 'd';
				break;
		}

		window.dispatchEvent(new KeyboardEvent('keydown', { key }));
	};
</script>

<div class="flex flex-col items-center">
	<div id="root" class="rounded-md bg-gray-100 p-2 dark:bg-gray-900" />
	<button class="mt-4 rounded-md bg-red-400 px-3" on:click={handleButton}
		>{launched ? 'Reset the game' : 'Start the game'}</button
	>
	<div class=" mt-6 flex flex-col lg:hidden">
		<button
			class="mb-2 self-center rounded-md bg-orange-400 px-3 py-1"
			on:click={() => handleDir(Direction.Up)}>W</button
		>
		<div>
			<button
				class="w-fit rounded-md bg-orange-400 px-3 py-1"
				on:click={() => handleDir(Direction.Left)}>A</button
			>
			<button
				class="w-fit rounded-md bg-orange-400 px-3 py-1"
				on:click={() => handleDir(Direction.Down)}>S</button
			>
			<button
				class="w-fit rounded-md bg-orange-400 px-3 py-1"
				on:click={() => handleDir(Direction.Right)}>D</button
			>
		</div>
	</div>
</div>
