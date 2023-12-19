<script lang="ts">
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

<div class="my-24 justify-center md:my-48">
	<p
		class="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-5xl font-black text-transparent md:text-9xl"
	>
		{writer}
	</p>
	<p class="mt-4 font-semibold dark:text-gray-400 md:text-2xl">Welcome to my portfolio website!</p>
</div>
