<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import "../lib/styles/main.scss";
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main>
	<slot />  
</main>

<Footer />
