<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import Hamburger from './hamburger.svelte'


    export let sidebar = false
    export let logout;
    export let user;
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> -->
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
		<a href="/">
		<img class="object-center h-8 w-40" src="images/warlok_logo.png" alt="Warlok">
		</a>
	
	</nav>

	<nav class="hidden text-gray-500 uppercase text-bold lg:block ">
		<a sveltekit:prefetch href="/">Home</a>
		<a sveltekit:prefetch href="/login">Login</a>
		<a sveltekit:prefetch href="/signup">Sign Up</a>
		<a sveltekit:prefetch href="/todos">Todos</a>
		<!-- <li class:active={$page.path === '/'}>
		<li class:active={$page.path === '/login'}>
		<li class:active={$page.path === '/todos'}> -->
		<!-- {#if $user}
		<a href="/">Home</a>
		<a href="/Inbox">Inbox</a>
		<a href="/" on:click|preventDefault={logout}>Logout</a>
		{:else}
		<a href="/">Home</a>
		<a href="/Login">Login</a>
		<a href="SignUp">Sign Up</a>
		{/if} -->
	</nav>
	

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>


