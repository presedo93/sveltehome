<script lang="ts">
	import { t, setLocale } from '$lib/translations';
	import { CogIcon } from '$lib/icons';
	import { ToggleTheme } from '$lib/components';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';

	const {
		elements: { menu, item, trigger, arrow, separator }
	} = createDropdownMenu();

	const handleLocale = async (locale: string) => {
		document.cookie = `lang=${locale} ;`;
		await setLocale(locale);
	};
</script>

<button use:melt={$trigger} class="flex flex-row gap-2"
	><CogIcon /> {$t('navbar.config.name')}</button
>
<div use:melt={$menu} class="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
	<div use:melt={$arrow} />
	<div use:melt={$item} class="flex items-baseline justify-between px-2 py-1">
		<button
			on:click={() => handleLocale('en')}
			class="rounded-md border border-black px-2 text-xl font-bold dark:border-gray-900">EN</button
		>
		<p>{$t('navbar.config.en')}</p>
	</div>
	<div use:melt={$item} class="flex items-baseline justify-between px-2 py-1">
		<button
			on:click={() => handleLocale('es')}
			class="rounded-md border border-black px-2 text-xl font-bold dark:border-gray-900">ES</button
		>
		<p>{$t('navbar.config.es')}</p>
	</div>
	<div use:melt={$separator} class="m-[5px] h-[1px] bg-black dark:bg-gray-900" />
	<div use:melt={$item} class="flex items-center gap-4 p-2">
		<ToggleTheme />
		{$t('navbar.config.theme')}
	</div>
</div>
