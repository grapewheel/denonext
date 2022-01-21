import { Client } from 'https://deno.land/x/mysql/mod.ts'

const client = await new Client().connect({
	hostname: 'localhost',
	username: 'dgg',
	password: 'dgg',
	poolSize: 3,
	db: 'dgg',
})

export default client
export * from 'https://deno.land/x/sql_builder/mod.ts'
