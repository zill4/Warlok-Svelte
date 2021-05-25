<script>
	import Header from '$lib/Header/index.svelte';
	import Sidebar from '$lib/Sidebar/index.svelte';
	import '../app.css';

	let open = false;

</script>

<Sidebar bind:open />
<Header bind:sidebar={open} />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>

	
</style>
