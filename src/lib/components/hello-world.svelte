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

<p
	class="bg-gradient-to-r from-blue-600 via-green-500 to-red-400 bg-clip-text text-3xl font-black text-transparent"
>
	{writer}
</p>
