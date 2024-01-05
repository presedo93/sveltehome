<script lang="ts">
	import { HelloWorld } from '$lib/components';
	import { t } from '$lib/translations';
</script>

<div class="flex w-full flex-col">
	<HelloWorld />
	<div class="mx-4 rounded p-4 md:px-12">
		<p class="mb-8 text-start">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html $t('home.intro', { name: 'René Presedo' })}
		</p>
		<p class="mb-8 text-start">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html $t('home.section1', {
				pentium: "<code class='text-blue-600 dark:text-blue-300'>Intel Pentium II</code>",
				jazz: "<code class='text-orange-400 dark:text-yellow-300'>Jazz Jackrabbit</code>"
			})}
		</p>
		<p class="mb-8 text-start"></p>
		<p class="mb-8 text-start">
			{$t('home.section2')}
		</p>
		<p class="mb-8 text-start">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html $t('home.section3', {
				nintendo: "<code class='text-red-600 dark:text-red-300'>Nintendo Switch</code>",
				xbox: "<code class='text-lime-600 dark:text-lime-300'>Xbox Series X</code>"
			})}
		</p>
		<p class="mb-8 text-start">
			{$t('home.section4')}
		</p>
		<div class="mb-8 flex w-full items-center justify-center">
			<div class="h-36 w-36 overflow-hidden rounded-full border border-white">
				<img alt="Profile" src={'/images/presedo.jpg'} />
			</div>
		</div>
	</div>
	<div class="h-12" />
</div>
