import db, { Query } from '../../services/db.ts'

export interface P {
	page: number
	pageSize: number
}

export default async ({ page = 1, pageSize = 10 }: P) => {
	const Sql = new Query()

	return await db.query(
		Sql.table('User')
			.limit((page - 1) * pageSize, pageSize)
			.select('*')
			.build()
	)
}
