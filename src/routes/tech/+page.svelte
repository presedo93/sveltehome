<script lang="ts">
	import { t } from '$lib/translations';
</script>

<div class="mx-4 flex flex-col">
	<h1 class="mb-8 text-4xl font-bold">{$t('tech.title')}</h1>
	<p class="mb-2">
		{$t('tech.intro')}
	</p>
	<div class="flex flex-col items-center justify-center">
		<div class="mb-2 mt-8 flex w-full flex-row items-center justify-start">
			<img src="/images/c++.jpeg" alt="C++ logo" class="h-10 w-10 rounded-md" />
			<h3 class="ml-4 text-3xl font-bold">C/C++</h3>
		</div>
		<div class="my-2">
			<p class="text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.c++1', {
					vivado: "<code class='text-orange-600 dark:text-orange-300'>Vivado HLS</code>"
				})}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.c++2', {
					opencv: "<code class='text-cyan-600 dark:text-cyan-300'>OpenCV</code>"
				})}
			</p>
		</div>
		<div class="mb-2 mt-8 flex w-full flex-row items-center justify-start">
			<img src="/images/python.jpeg" alt="Python logo" class="h-12 w-12 rounded-md" />
			<h3 class="ml-4 text-3xl font-bold">Python</h3>
		</div>
		<div class="my-2">
			<p class="text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.python1')}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.python2', {
					pytorch: "<code class='text-red-600 dark:text-red-300'>Pytorch</code>"
				})}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.python3', {
					fastapi: "<code class='text-green-600 dark:text-green-300'>FastAPI</code>"
				})}
			</p>
		</div>
		<div class="mb-2 mt-8 flex w-full flex-row items-center justify-start">
			<img src="/images/js.jpeg" alt="JS/TS logo" class="h-10 w-10 rounded-md" />
			<h3 class="ml-4 text-3xl font-bold">JS/TS</h3>
		</div>
		<div class="my-2">
			<p class="text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.js1')}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.js2', {
					vue: "<code class='text-green-600 dark:text-green-300'>Vue</code>",
					react: "<code class='text-indigo-600 dark:text-indigo-300'>React</code>",
					sveltekit: "<code class='text-orange-600 dark:text-orange-300'>SvelteKit</code>"
				})}
			</p>
		</div>
		<div class="mb-2 mt-8 flex w-full flex-row items-center justify-start">
			<img src="/images/rust.jpeg" alt="Rust logo" class="h-10 w-10 rounded-md" />
			<h3 class="ml-4 text-3xl font-bold">Rust</h3>
		</div>
		<div class="my-2">
			<p class="text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.rust1')}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.rust2', {
					borrowing: "<code class='text-red-600 dark:text-red-300'>borrowing</code>",
					ownership: "<code class='text-red-600 dark:text-red-300'>ownership</code>"
				})}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.rust3')}
			</p>
		</div>
		<div class="mb-2 mt-8 flex w-full flex-row items-center justify-start">
			<img src="/images/extra.jpeg" alt="Extra logo" class="h-10 w-10 rounded-md" />
			<h3 class="ml-4 text-3xl font-bold">Extra, extra</h3>
		</div>
		<div class="my-2">
			<p class="text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.extra1')}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.extra2', {
					dockerfiles: "<code class='text-blue-600 dark:text-blue-300'>Dockerfiles</code>"
				})}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.extra3')}
			</p>
			<p class="mt-4 text-start">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('tech.extra4')}
			</p>
		</div>
	</div>
	<div class="h-12" />
</div>
