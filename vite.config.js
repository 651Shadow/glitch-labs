import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Relative base so the site works on GitHub Pages project URLs,
// custom domains, and anywhere else without path rewrites.
export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});
