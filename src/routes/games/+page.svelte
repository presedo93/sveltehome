<script lang="ts">
	import { MineSweeper, Snake } from '$lib/components';
	import { t } from '$lib/translations';

	let mine;
</script>

<div class="mx-4 flex flex-col">
	<h1 class="mb-8 text-4xl font-bold">{$t('games.title')}</h1>
	<p class="mb-2">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html $t('games.intro', {
			rust: "<code class='text-red-600 dark:text-red-300'>Rust</code>",
			sveltekit: "<code class='text-orange-600 dark:text-orange-300'>SvelteKit</code>",
			webassembly: "<code class='text-indigo-600 dark:text-indigo-300'>Web Assembly!</code>"
		})}
	</p>
	<h3 class="mt-4 w-full text-3xl font-bold md:ml-12 md:text-left">MineSweeper</h3>
	<div class="mt-2 flex flex-col items-center justify-center gap-8 md:ml-12 md:flex-row">
		<div class="flex flex-col items-center justify-center">
			<MineSweeper bind:this={mine} />
			<button on:click={mine.reset} class="mt-4 rounded-lg bg-red-400 px-2">Reset the board</button>
		</div>
		<div class="md:mr-12">
			<p class="mb-2">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('games.minesweeper', {
					minesweeper: "<code class='text-blue-600 dark:text-blue-300'>MineSweeper</code>"
				})}
			</p>
			<p>
				{$t('games.minesweeper2')}
			</p>
		</div>
	</div>
	<h3 class="mt-4 w-full text-3xl font-bold md:pr-12 md:text-right">Snake</h3>
	<div class="flex flex-col-reverse items-center justify-center gap-8 md:mr-12 md:flex-row">
		<div class="md:ml-12">
			<p>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('games.snake', {
					snake: "<code class='text-green-600 dark:text-green-300'>Snake</code>"
				})}
			</p>
			<p class="mt-2">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('games.snake2')}
			</p>
		</div>
		<div class="mt-2">
			<Snake />
		</div>
	</div>
	<p class="mt-6 md:mt-12">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html $t('games.ending', {
			minerepo:
				"<a class='text-green-600 dark:text-green-300 underline underline-offset-2' target='_blank' rel='noopener noreferrer' href='https://github.com/presedo93/snake'>Snake</a>",
			snakerepo:
				"<a class='text-blue-600 dark:text-blue-300 underline underline-offset-2' target='_blank' rel='noopener noreferrer' href='https://github.com/presedo93/minesweeper'>MineSweeper</a>"
		})}
	</p>
	<div class="h-12" />
</div>
