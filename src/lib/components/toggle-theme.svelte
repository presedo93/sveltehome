<script lang="ts">
	import { fade } from 'svelte/transition';

	import { SunIcon, MoonIcon } from '$lib/icons';
	import { onMount } from 'svelte';

	let dark: boolean;

	onMount(() => {
		// use the existence of the dark class on the html element for the initial value
		dark = document.documentElement.classList.contains('dark');

		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleChange);

		return () => matcher.removeEventListener('change', handleChange);
	});

	const handleChange = ({ matches: dark }: MediaQueryListEvent) => {
		// only set if we haven't overridden the theme
		if (!localStorage.theme) setTheme(!dark);
	};

	const setTheme = (value: boolean) => {
		dark = value;

		// update page styling
		if (dark) document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');

		// store the theme as a local override
		localStorage.theme = dark ? 'dark' : 'light';

		// if the toggled-to theme matches the system defined theme, clear the local override
		// this effectively provides a way to override or revert to "automatic" setting mode
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	};

	function toggle() {
		setTheme(!dark);
	}
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<button transition:fade={{ delay: 250, duration: 300 }} on:click={toggle}>
	{#if dark}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</button>
