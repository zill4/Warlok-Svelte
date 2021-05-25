import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const netlify = require('@sveltejs/adapter-netlify')
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify()
	}
};

export default config;
