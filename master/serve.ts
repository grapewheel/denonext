import { Application, Router, helpers } from 'https://deno.land/x/oak/mod.ts'
import { createRemote } from 'https://deno.land/x/gentle_rpc/mod.ts'

const app = new Application()
const branch = createRemote('http://localhost:9000')

const router = new Router()
router.get('/:m/:f.:x(ts|js)', async (ctx) => {
	const { m, f, x } = ctx.params
	const p = helpers.getQuery(ctx)

	if (m === 'tools' && f === 'call') {
		const buf = Deno.readFileSync(`./tools/call.${x}`)
		const decoder = new TextDecoder()

		ctx.response.headers.set(
			'Content-Type',
			x === 'ts' ? 'application/octet-stream' : 'application/javascript'
		)

		if (x === 'js')
			ctx.response.headers.set(
				'Access-Control-Allow-Origin',
				'http://localhost:8080'
			)

		ctx.response.body = decoder.decode(buf)
	} else {
		ctx.response.headers.set(
			'Content-Type',
			x === 'ts' ? 'application/octet-stream' : 'application/javascript'
		)

		if (x === 'js')
			ctx.response.headers.set(
				'Access-Control-Allow-Origin',
				'http://localhost:8080'
			)

		ctx.response.body = async () => {
			console.log('master invoked')

			const res = await branch.call(`${m}.${f}`, p)
			if (typeof res === 'string') return `export const res = '${res}'`
		}
	}
})

app.use(router.routes())
app.use(router.allowedMethods())

console.log('listening on http://localhost:8000')
await app.listen({ port: 8000 })
