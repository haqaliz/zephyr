import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/local': {
				target: 'http://localhost:8081',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/local/, '')
			}
		},
		port: 8080
	},
	preview: {
		host: '0.0.0.0',
		port: 8080
	},
	build: {
		chunkSizeWarningLimit: 1024,
		sourcemap: true
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
