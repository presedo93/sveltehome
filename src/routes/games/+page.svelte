<script lang="ts">
	import { MineSweeper, Snake } from '$lib/components';

	let mine;
</script>

<div class="mx-4 flex flex-col">
	<h1 class="mb-8 text-5xl">Games</h1>
	<p class="mb-8">
		This page shows two classics as are the <code>minesweeper</code> and the <code>snake</code>. The
		key feature here is that they logic behind them it's done in
		<code class="text-red-600 dark:text-red-300">Rust</code>
		and binded with
		<code class="text-orange-600 dark:text-orange-300">SvelteKit</code>
		using <code class="text-indigo-600 dark:text-indigo-300">Web Assembly!</code>
	</p>
	<div
		class="flex flex-col items-center justify-center gap-8 md:ml-12 md:flex-row md:justify-start"
	>
		<div class="flex flex-col items-center justify-center">
			<MineSweeper bind:this={mine} />
			<button on:click={mine.reset} class="mt-4 rounded-lg bg-red-400 px-2">Reset the board</button>
		</div>
		<p class="mb-2">
			Just click the cells to open them! In case you want to put a red flag to mark a box, you can
			do it by pressing the right click (or long press in mobile devices). The big red button does
			what you could imagine, it resets the board.
		</p>
		<p>
			The game is initialized and controlled by Rust code that is briged to the JS world using the
			wasm_bindgen crate. Each time the component that contais the board, is mounted, it
			instantiates the wasm module.
		</p>
	</div>
	<div class="mt-8">
		<Snake />
	</div>
	<div class="h-12" />
</div>
