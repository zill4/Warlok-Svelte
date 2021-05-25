<script>
    import { fade } from 'svelte/transition';

    const signUpHandler = async event => {
    const { email, password, passwordTwo } = event.target.elements;
    try {
      error = null;
      if (password.value === passwordTwo.value)
      {
        await createUserWithEmailPassword(email.value, password.value);
        await loginWithEmailPassword(email.value, password.value);
        document.location.href = '/';
      }
      else{
        alert("Passwords do not match");
      }
    } catch (err) {
      error = err;
    }
  };

  let error;
export let loginWithEmailPassword, loginWithGoogle, logout, user, passwordReset, passwordUpdate, createUserWithEmailPassword;
</script>
<div class="h-screen flex">
    <div class="place-content-center w-full max-w-xs m-auto bg-purple-900 rounded p-6">
        <header>
            <img class="w-20 mx-auto mb-5" src="./images/warlock.png" alt="warlok">
        </header>   
    
        <form on:submit|preventDefault={signUpHandler}>
            <div>
             <label class="block mb-2 text-indigo-400" for="username">Email</label>
             <input class="w-full p-2 mb-6 text-indigo-600 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" id="email">
           </div>
           <div>
            <label class="block mb-2 text-indigo-400" for="password">Password</label>
            <input class="w-full p-2 mb-6 text-indigo-600 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" id="password">
          </div>
          <div>
            <label class="block mb-2 text-indigo-400" for="password">Confirm Password</label>
            <input class="w-full p-2 mb-6 text-indigo-600 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" id="passwordTwo">
          </div>
           <div>          
             <input class="w-full bg-indigo-600 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
           </div>       
         </form>
         {#if error}
         <div transition:fade class="p-2 mb-6 bg-red-300">{error.message}</div>
         {/if}
    
         <footer>
            <a class="text-indigo-600 hover:text-pink-700 text-sm place-self-center" href="/Login">Already have an account?</a>
          </footer> 
    </div>
</div>
