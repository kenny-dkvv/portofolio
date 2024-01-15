import { defineConfig } from 'astro/config';
import 'dotenv/config'

const base = process.env.BASE;

// https://astro.build/config
export default defineConfig({
    site: 'https://isonnymichael.github.io',
    base: base,
});
