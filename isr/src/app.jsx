import { Helmet } from 'helmet'
import React, { Suspense } from 'react'
import call from 'call'
import useSWR, { SWRConfig } from 'swr'

const opts = {
	suspense: true,
	fetcher: (resource, init) => call(resource, init).then((res) => res),
}

const Hello = () => {
	const { data } = useSWR(['user.list', { page: 1 }])

	return (
		<ul>
			{data.map((i) => (
				<li>{i.mobile}</li>
			))}
		</ul>
	)
}

const App = () => {
	return (
		<SWRConfig value={opts}>
			<Helmet>
				<title>Deno Next</title>
			</Helmet>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Hello />
				</Suspense>
			</main>
		</SWRConfig>
	)
}

export default App
