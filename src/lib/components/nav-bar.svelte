<script lang="ts">
	import { TerminalIcon, CareerIcon, GamesIcon, ProjectsIcon, HomeIcon } from '$lib/icons';
	import { ConfigMenu } from '$lib/components';
	import { t } from '$lib/translations';

	let prevY: number;
	let scrollY: number;
	let height: number;

	const deriveDir = (currY: number) => {
		const dir = !prevY || prevY < currY ? 'down' : 'up';
		prevY = currY;

		return dir;
	};

	$: opacity = !scrollY || deriveDir(scrollY) === 'up';
</script>

<svelte:window bind:scrollY />

<div class="sticky left-0 right-0 top-[93%] mx-5 flex justify-center">
	<div
		class="flex w-full items-baseline justify-around gap-4 rounded-lg border border-gray-300 bg-gray-200 p-2 transition-opacity ease-in dark:bg-gray-800 md:w-2/3"
		class:motion-safe:opacity-0={!opacity}
		bind:clientHeight={height}
	>
		<a href="/" class="flex flex-row gap-2"
			><HomeIcon />
			<p class="hidden font-semibold lg:line-clamp-1 lg:overflow-hidden">Rene Presedo</p></a
		>
		<a href="/tech" class="flex flex-row gap-2"
			><TerminalIcon />
			<p class="hidden lg:line-clamp-1 lg:overflow-hidden">{$t('navbar.tech')}</p></a
		>
		<a href="/career" class="flex flex-row gap-2"
			><CareerIcon />
			<p class="hidden lg:line-clamp-1 lg:overflow-hidden">{$t('navbar.career')}</p></a
		>
		<a href="/projects" class="flex flex-row gap-2"
			><ProjectsIcon />
			<p class="hidden lg:line-clamp-1 lg:overflow-hidden">{$t('navbar.projects')}</p></a
		>
		<a href="/games" class="flex flex-row gap-2"
			><GamesIcon />
			<p class="hidden lg:line-clamp-1 lg:overflow-hidden">{$t('navbar.games')}</p></a
		>
		<ConfigMenu />
	</div>
</div>
