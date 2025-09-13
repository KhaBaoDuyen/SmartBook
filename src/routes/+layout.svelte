<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	let { children } = $props();
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="flex-1">
	{@render children?.()}
</main>

<Footer />

<style>
	/* Optional: Global layout styles nếu cần */
	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>