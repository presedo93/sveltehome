<script>
	import '../app.css';
	import { NavBar } from '$lib/components';
</script>

<div class="m-auto min-h-screen max-w-screen-xl">
	<NavBar />
	<div class="flex justify-center"><slot /></div>
</div>
