<script lang="ts">
	export let size = 24;
	$: sizePx = `${size}px`;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	style:width={sizePx}
	style:height={sizePx}
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="h-6 w-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
	/>
</svg>
