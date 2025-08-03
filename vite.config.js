import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: process.env.BASE_PATH || '',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import './src/styles/variables.scss';`
			}
		}
	}
});