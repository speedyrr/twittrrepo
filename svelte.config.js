// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		methodOverride: { allowed: ['DELETE'] },
	},
}

export default config
