import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		host: 'localhost',
		port: 5173,
		proxy: {
			'/api/': {
				target: 'http://localhost:3000',
				secure: false,
				ws: false
			}
		}
	}
});
