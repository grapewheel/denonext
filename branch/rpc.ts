import { serve } from 'https://deno.land/std/http/server.ts'
import { respond } from 'https://deno.land/x/gentle_rpc/mod.ts'
import { expandGlobSync } from 'https://deno.land/std/fs/mod.ts'
import './services/db.ts'

let methods: any = {}

for (const file of expandGlobSync('./functions/*/**/*.ts')) {
	const paths = file.path.split('/')
	const module = paths[paths.length - 2]
	const func = file.name.split('.')[0]

	methods[`${module}.${func}`] = async (p?: any) => {
		console.log(`branch ${module}/${func} invoked`)

		try {
			const fn = await import(`./functions/${module}/${func}.ts`)
			return await fn.default(p)
		} catch (e) {
			console.error(`branch ${module}/${func}`, e)
			throw e
		}
	}
}

serve((req) => respond(methods, req), { port: 9000 })
console.log('Listening on http://localhost:9000')
