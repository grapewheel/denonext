import db, { Query, Where } from '../../services/db.ts'

export interface P {
	_page?: number
	_pageSize?: number
	_extend?: boolean
}

export default async ({ _page = 1, _pageSize = 10, _extend = true }: P) => {
	let sqlAddr = new Query()
		.table('Address')
		.where(Where.eq('userId', 'User.id'))
		.select('*')
		.build()

	return await db.query(
		new Query()
			.table('User')
			.limit((_page - 1) * _pageSize, _pageSize)
			.select('*', _extend ? sqlAddr + ' AS addresses' : '')
			.build()
	)
}
