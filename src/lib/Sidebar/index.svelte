<script>


    export let open = false;
    export let user;
    export let logout;
    let navItems = [
		{ id: 0, name: 'Home', link: {path: '/', name: 'Home'}, status: 'active'},
		{ id: 1, name: 'Login', link: {path: '/Login', name: 'Login'}, status: 'inactive'},
		{ id: 2, name: 'SignUp', link: {path: '/SignUp', name: 'SignUp'}, status: 'inactive'}
	];
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
    <nav class="p-12 text-xl">
        <!-- <button class:open on:click={() => open = !open}>
        </button> -->
        <!-- {#if $user} -->
        <!-- <a class:open on:click={() => open = !open} href="/" class="block">Home</a>
        <a class:open on:click={() => open = !open} href="/Inbox" class="block">Inbox</a>
        <a class:open on:click={() => open = !open} on:click|preventDefault={logout} href="/" class="block">Logout</a> -->
        <!-- {:else} -->
        <a class:open on:click={() => open = !open} href="/" class="block">Home</a>
        <a class:open on:click={() => open = !open} href="/login" class="block">Login</a>
        <a class:open on:click={() => open = !open} href="/signup" class="block">Sign Up</a>
        <!-- {/if} -->
    </nav>
</aside>

<style>
    aside {
        left: -100%;
        transition: left 0.3s ease-in-out
    }

    .open {
        left: 0
    }
</style>