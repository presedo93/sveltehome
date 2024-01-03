<script lang="ts">
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	let message: string = 'Hello, World!';
	let writer: string = '';

	const typewriter = () => {
		if (writer.length < message.length) {
			writer += message.charAt(writer.length);

			setTimeout(typewriter, 150);
		}
	};

	onMount(typewriter);
</script>

<div class="my-20 justify-center md:my-40">
	<p
		class="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-5xl font-black text-transparent md:text-9xl"
	>
		{writer}
	</p>
	<p class="mt-4 font-bold text-gray-700 dark:text-gray-400 md:text-2xl">
		{$t('home.subtitle')}
	</p>
</div>
