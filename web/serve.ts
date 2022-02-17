import { build, stop, serve } from 'https://deno.land/x/esbuild@v0.13.14/mod.js'
import httpFetch from 'https://deno.land/x/esbuild_plugin_http_fetch@v1.0.3/index.js'
import importmap from './import_dev.json' assert { type: 'json' }

const basePath = './'

await serve(
	{
		servedir: basePath,
		port: 8080,
	},
	{
		entryPoints: ['main.tsx'],
		bundle: true,
		external: Object.keys(importmap.imports),
		plugins: [httpFetch],
		sourcemap: true,
		outdir: './js',
		format: 'esm',
	}
)
