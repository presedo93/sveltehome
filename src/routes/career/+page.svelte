<script lang="ts">
	import { t } from '$lib/translations';
</script>

<div class="mx-4 flex w-full flex-col">
	<h1 class="mb-8 text-4xl font-bold">{$t('career.title')}</h1>
	<p class="mb-2 text-justify">
		{$t('career.intro')}
	</p>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="my-2 flex flex-col">
			<h3 class="text-3xl font-bold">{$t('career.work')}</h3>
			<ol class="space-y-4">
				<li>
					<h5 class="text-lg font-bold">Full Stack Developer (Sonnen)</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2022 - actually</p>
					<p class="text-gray-500">{$t('career.work1')}</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">Backend Developer (Sonnen)</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2020 - 2022</p>
					<p class="text-gray-500">{$t('career.work2')}</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">Machine Learning Engineer (Aeorum)</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2018 - 2020</p>
					<p class="text-gray-500">
						{$t('career.work3')}
					</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">Embedded Engineer (Aeorum)</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2017 - 2018</p>
					<p class="text-gray-500">{$t('career.work4')}</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">Junior Software Developer</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2016 - 2017</p>
					<p class="text-gray-500">{$t('career.work5')}</p>
				</li>
			</ol>
		</div>
		<div class="my-2 flex flex-col">
			<h3 class="text-3xl font-bold">{$t('career.education')}</h3>
			<ol class="space-y-4">
				<li>
					<h5 class="text-lg font-bold">
						{$t('career.education1')}
					</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2014 - 2016</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">{$t('career.education2')}</h5>
					<p class="text-sm text-gray-700 dark:text-gray-300">2010 - 2014</p>
				</li>
			</ol>
			<h3 class="mt-8 text-3xl font-bold">{$t('career.courses')}</h3>
			<ol class="space-y-4">
				<li>
					<h5 class="text-lg font-bold">Rust</h5>
					<p class="text-gray-500">Rust Intro by Ferrous Systems</p>
					<p class="text-gray-500">Rust Telemetry by Mainmatter</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">Machine Learning</h5>
					<p class="text-gray-500">Machine Learning Intro by Coursera</p>
					<p class="text-gray-500">Machine Learning for Computer Vision by Coursera</p>
				</li>
			</ol>
		</div>
		<div class="my-2 flex flex-col">
			<h3 class="text-3xl font-bold">{$t('career.projects')}</h3>
			<ol class="space-y-4">
				<li>
					<h5 class="text-lg font-bold">Fitnote</h5>
					<p class="text-gray-500">React Native - Supabase</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">TweeSent</h5>
					<p class="text-gray-500">React - fastAPI - PyTorch</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">PyStock</h5>
					<p class="text-gray-500">Numpy - Pandas - backtesting.py</p>
				</li>
				<p class="mt-2 font-bold">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html $t('career.moreprj', {
						anchorprj: "<a href='/projects' class='underline'>Projects</a>",
						github:
							"<a class='underline' target='_blank' rel='noopener noreferrer' href='https://github.com/presedo93'>GitHub</a>"
					})}
				</p>
			</ol>
		</div>
		<div class="my-2 flex flex-col">
			<h3 class="text-3xl font-bold">{$t('career.languages')}</h3>
			<ol class="space-y-4">
				<li>
					<h5 class="text-lg font-bold">Rust</h5>
					<p class="text-gray-500">Backend - Systems - Embedded</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">JS/TS</h5>
					<p class="text-gray-500">React - Svelte - VueJS - EmberJS</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">Python</h5>
					<p class="text-gray-500">Backend - Testing - AI</p>
				</li>
				<li>
					<h5 class="text-lg font-bold">C/C++</h5>
					<p class="text-gray-500">Embedded - Systems - AI</p>
				</li>
			</ol>
			<p class="mt-2 font-bold">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('career.morelang', {
					anchorlang: "<a href='/tech' class='underline'>Tech</a>"
				})}
			</p>
		</div>
	</div>
</div>
