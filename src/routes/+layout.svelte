<script>
	import '../app.css';
	import { NavBar } from '$lib/components';
</script>

<div class="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] min-h-screen">
	<NavBar />
	<slot />
</div>
