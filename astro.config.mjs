import { defineConfig } from 'astro/config';
import 'dotenv/config'

const base = process.env.BASE;

// https://astro.build/config
export default defineConfig({
    site: 'https://kenny-dkvv.github.io',
    base: base,
    output: 'static',
    outDir: './docs',
    build: {
        assets: 'astro'
    }
});
