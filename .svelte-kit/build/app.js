import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"images/warlock_favi.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t" + head + "\n\t</head>\n\t<body class=\"bg-indigo-200\">\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-2b12679c.js",
			css: ["/./_app/assets/start-0826e215.css"],
			js: ["/./_app/start-2b12679c.js","/./_app/chunks/vendor-2c9c3fa6.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"images/mail_bits.png","size":12358,"type":"image/png"},{"file":"images/rei.jpg","size":110512,"type":"image/jpeg"},{"file":"images/warlock.png","size":82775,"type":"image/png"},{"file":"images/warlock_favi.ico","size":993,"type":"image/vnd.microsoft.icon"},{"file":"images/warlok_color.png","size":5183,"type":"image/png"},{"file":"images/warlok_logo.png","size":16126,"type":"image/png"},{"file":"images/white_mail_bits.png","size":10041,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/signup\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/signup.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/login.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("../../src/routes/todos/index.json.js")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("../../src/routes/todos/[uid].json.js")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/signup.svelte": () => import("../../src/routes/signup.svelte"),"src/routes/login.svelte": () => import("../../src/routes/login.svelte"),"src/routes/todos/index.svelte": () => import("../../src/routes/todos/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-f1147c1e.js","css":["/./_app/assets/pages/__layout.svelte-edbbb0d9.css"],"js":["/./_app/pages/__layout.svelte-f1147c1e.js","/./_app/chunks/vendor-2c9c3fa6.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-fa183a48.js","css":[],"js":["/./_app/error.svelte-fa183a48.js","/./_app/chunks/vendor-2c9c3fa6.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-dc1c15f6.js","css":["/./_app/assets/pages/index.svelte-32e1e18a.css"],"js":["/./_app/pages/index.svelte-dc1c15f6.js","/./_app/chunks/vendor-2c9c3fa6.js"],"styles":null},"src/routes/signup.svelte":{"entry":"/./_app/pages/signup.svelte-ffe65641.js","css":[],"js":["/./_app/pages/signup.svelte-ffe65641.js","/./_app/chunks/vendor-2c9c3fa6.js"],"styles":null},"src/routes/login.svelte":{"entry":"/./_app/pages/login.svelte-09fb8d8c.js","css":[],"js":["/./_app/pages/login.svelte-09fb8d8c.js","/./_app/chunks/vendor-2c9c3fa6.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-d8d5198a.js","css":["/./_app/assets/pages/todos/index.svelte-ab14594b.css"],"js":["/./_app/pages/todos/index.svelte-d8d5198a.js","/./_app/chunks/vendor-2c9c3fa6.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}