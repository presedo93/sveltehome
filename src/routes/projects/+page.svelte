<script lang="ts">
	import { t } from '$lib/translations';
</script>

<div class="mx-4 flex flex-col">
	<h1 class="mb-8 text-4xl font-bold">{$t('projects.title')}</h1>
	<p class="mb-2 text-justify">
		{$t('projects.intro')}
	</p>
	<div class="flex flex-col">
		<h3 class="mt-4 w-full text-3xl font-bold md:text-right">Fitnote</h3>
		<div class="my-3 flex w-full flex-col md:block">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				controls
				controlsList="nodownload"
				class="my-4 w-[180px] self-center rounded-md md:float-right md:my-0 md:mb-2 md:ml-6 md:h-[400px]"
			>
				<source src="/videos/fitnote.mp4" type="video/mp4" />
			</video>
			<div class="my-2">
				<p class="text-justify">
					{$t('projects.fitnote1')}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.fitnote2', {
						native: "<code class='text-sky-600 dark:text-sky-300'>React Native + Expo</code>",
						query: "<code class='text-amber-600 dark:text-amber-300'>React Query</code>",
						jotai: "<code class='text-gray-600 dark:text-gray-300'>Jotai</code>",
						shopify: "<code class='text-green-600 dark:text-green-300'>Shopify</code>"
					})}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.fitnote3', {
						supabase: "<code class='text-emerald-600 dark:text-emerald-300'>Supabase</code>"
					})}
				</p>
				<p class="mt-4 text-justify">
					{$t('projects.fitnote4')}
				</p>
			</div>
		</div>
		<h3 class="mt-4 w-full text-3xl font-bold md:text-left">Homepage</h3>
		<div class="my-2 flex w-full flex-col md:block">
			<img
				src="/images/homepage.jpg"
				alt="Homepage..."
				class="my-4 rounded-md md:float-left md:my-0 md:mb-2 md:mr-6 md:h-[240px] md:w-[360px]"
			/>
			<div class="my-2">
				<p class="text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.homepage1', {
						nextjs: "<code class='text-blue-600 dark:text-blue-300'>NextJS12</code>"
					})}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.homepage2', {
						sveltekit: "<code class='text-orange-600 dark:text-orange-300'>SvelteKit</code>"
					})}
				</p>
			</div>
		</div>
		<h3 class="mt-4 w-full text-3xl font-bold md:text-right">TweeSent</h3>
		<div class="my-3 flex w-full flex-col md:block">
			<img
				src="/images/tweesent.jpg"
				alt="Tweesent..."
				class="my-4 rounded-md md:float-right md:my-0 md:mb-2 md:ml-6 md:h-[240px] md:w-[360px]"
			/>
			<div class="my-2">
				<p class="text-justify">
					{$t('projects.tweesent1')}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.tweesent2', {
						fastapi: "<code class='text-green-600 dark:text-green-300'>fastAPI</code>"
					})}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.tweesent3', {
						streamlit: "<code class='text-red-600 dark:text-red-300'>Streamlit</code>",
						lightning: "<code class='text-violet-600 dark:text-violet-300'>PyTorch Lightning</code>"
					})}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.tweesent4', {
						vue: "<code class='text-green-600 dark:text-green-300'>VueJS 3</code>"
					})}
				</p>
			</div>
		</div>
		<h3 class="mt-4 w-full text-3xl font-bold md:text-left">PyStocks</h3>
		<div class="my-2 flex w-full flex-col md:block">
			<img
				src="/images/backtesting.jpg"
				alt="Backtesting..."
				class="my-4 rounded-md md:float-left md:my-0 md:mb-2 md:mr-6 md:h-[240px] md:w-[360px]"
			/>
			<div class="my-2">
				<p class="text-justify">
					{$t('projects.backtesting1')}
				</p>
				<p class="mt-4 text-justify">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('projects.backtesting2', {
						pandas: "<code class='text-cyan-600 dark:text-cyan-300'>Pandas</code>",
						numpy: "<code class='text-cyan-600 dark:text-cyan-300'>NumPy</code>"
					})}
				</p>
				<p class="mt-4 text-justify">
					{$t('projects.backtesting3')}
				</p>
			</div>
		</div>
	</div>
</div>
