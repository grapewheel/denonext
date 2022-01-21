import msgpack from 'https://esm.sh/msgpack-lite'

export default async <T extends object>(fn: string, data?: T): Promise<any> => {
	const f = fn.split('.')

	const buff = msgpack.encode(data)
	let uri = `http://localhost:8000/${f[0]}/${f[1]}.js?data=${buff.toString(
		'base64'
	)}`

	const { res } = await import(uri)
	return msgpack.decode(res)
}
