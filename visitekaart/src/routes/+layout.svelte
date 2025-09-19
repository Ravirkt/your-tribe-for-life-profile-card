<script>
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/Header.svelte";
	// import basic-stylesheet from '$lib/css/basic-stylesheet.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <nav>
	<a href="/about">about</a>
	<a href="/home">home</a>
	<a href="/details">details</a>
</nav> -->

<!-- <Header/> -->

{@render children?.()}

<!-- <footer>
	<h1>dit is de footer</h1>
</footer> -->
