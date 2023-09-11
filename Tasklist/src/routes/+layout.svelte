<script>
	import '../app.postcss';
	// @ts-nocheck

	import '../css/global.css';
	import Nav from '$lib/components/navbar.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true />
	<link href="https://fonts.googleapis.com/css2?family=Manrope&amp;display=swap" rel="stylesheet" />
</svelte:head>

<div class="bg-slate-800 h-full">

	<div class="container mx-auto  xl:px-64 h-full">
		<div class="bg-slate-700 h-full p-4">
	
			<Nav />
			<slot />
		</div>
	</div>
</div>
