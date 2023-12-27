<script lang="ts">
	import init from 'snake';
	import { onMount } from 'svelte';

	onMount(() => {
		init();
	});
</script>

<div id="root" class="h-[250px] w-[250px] rounded-md bg-gray-100 p-2 dark:bg-gray-900" />
