<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	import { fade } from 'svelte/transition';



// const { loginWithEmailPassword, loginWithGoogle, logout, user } = initAuth();

const loginHandler = async event => {
  const { email, password } = event.target.elements;
  try {
	error = null;
	await loginWithEmailPassword(email.value, password.value);
	document.location.href = '/';
  } catch (err) {
	error = err;
  }
};
export let loginWithEmailPassword, loginWithGoogle, logout, user, passwordReset, passwordUpdate, createUserWithEmailPassword;
let error;

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>


<!-- 
{#if $user} -->
    <!-- <button type="button" on:click|preventDefault={logout}> Logout </button>    -->
<!-- {:else} -->

<div class="h-screen flex">
    <div class="place-content-center w-full max-w-xs m-auto bg-purple-900 rounded p-6">
        <header>
            <img class="w-20 mx-auto mb-5" src="./images/warlock.png" alt="warlok">
        </header>   
    
        <form on:submit|preventDefault={loginHandler}>
            <div>
             <label class="block mb-2 text-indigo-400" for="email">Email</label>
             <input class="w-full p-2 mb-6 text-indigo-600 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email"  id='email'>
           </div>
           <div>
             <label class="block mb-2 text-indigo-400" for="password">Password</label>
             <input class="w-full p-2 mb-6 text-indigo-600 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" id="password">
           </div>
           <div>          
             <input class="w-full bg-indigo-600 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
           </div>
           <div class="mt-3">
       
           </div>  
           {#if error}
           <div transition:fade class="p-2 mb-6 bg-red-300">{error.message}</div>
           {/if}

         </form>
    
    
         <footer>
            <a class="text-indigo-600 hover:text-pink-700 text-sm float-left" href="/">Forgot Password?</a>
            <a class="text-indigo-600 hover:text-pink-700 text-sm float-right" href="/signup">Create Account</a>
          </footer> 
    </div>
</div>
<!-- {/if} -->
