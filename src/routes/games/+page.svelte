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
	<div class="mt-6 flex flex-col items-center justify-center gap-8 md:ml-12 md:mt-12 md:flex-row">
		<div class="flex flex-col items-center justify-center">
			<MineSweeper bind:this={mine} />
			<button on:click={mine.reset} class="mt-4 rounded-lg bg-red-400 px-2">Reset the board</button>
		</div>
		<div class="md:mr-12">
			<p class="mb-2">
				Welcome to the classic <code class="text-blue-600">MineSweeper</code>! Just click the cells
				to open them! In case you want to put a red flag to mark a box, you can do it by pressing
				the right click (or long press in mobile devices). The big red button does what you could
				imagine, it resets the board.
			</p>
			<p>
				The game is initialized and controlled by Rust code that is briged to the JS world using the
				wasm_bindgen crate. Each time the component that contais the board, is mounted, it
				instantiates the wasm module.
			</p>
		</div>
	</div>
	<div
		class="mt-6 flex flex-col-reverse items-center justify-center gap-8 md:mr-12 md:mt-12 md:flex-row"
	>
		<div class="md:ml-12">
			<p>
				Click the launch button to start the <code class="text-green-600">Snake</code> game! In this
				case, you need to use the <strong>AWSD</strong> keys to move the Snake and get the apples!
			</p>
			<p class="mt-2">
				For this game, the <code>HTML</code> code that renders the board is directly called from the
				Rust side. Same thing applies for the timer that moves the snake to the next position every 200ms.
			</p>
		</div>
		<div class="mt-8">
			<Snake />
		</div>
	</div>
	<p class="mt-6 md:mt-12">
		The source code for both projects can be found clicking in the <a
			class="text-blue-600 underline underline-offset-2"
			target="_blank"
			rel="noopener noreferrer"
			href="https://github.com/presedo93/minesweeper">MineSweeper</a
		>
		and
		<a
			class="text-green-600 underline underline-offset-2"
			target="_blank"
			rel="noopener noreferrer"
			href="https://github.com/presedo93/snake">Snake</a
		> repos!
	</p>
	<div class="h-12" />
</div>
