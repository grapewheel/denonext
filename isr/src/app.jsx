import { Helmet } from 'helmet'
import React, { Suspense } from 'react'
import call from 'call'
import useSWR, { SWRConfig } from 'swr'
import cache from 'ultra/cache'

const opts = {
	suspense: true,
	provider: () => cache(),
	fetcher: (resource, init) => call(resource, init).then(({ res }) => res),
}

const Hello = () => {
	const { data } = useSWR(['user.hello', { who: 'Grape' }])

	return <h1>{data}</h1>
}

const App = () => {
	return (
		<SWRConfig value={opts}>
			<Helmet>
				<title>ULTRA</title>
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
