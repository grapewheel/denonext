dev:
	mode=dev port=8080 deno run --allow-all --no-check --import-map=importmap.json server.js

start: 
	deno run --no-check --allow-net --allow-read --allow-env --allow-run --allow-write --import-map=importmap.json --unstable server.js

cache:
	deno cache --reload --no-check server.js