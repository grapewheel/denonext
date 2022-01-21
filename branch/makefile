dev:
	mode=dev deno run --allow-all --watch rpc.ts

start: 
	deno run --no-check --allow-net --allow-read --allow-env --allow-run --allow-write --import-map=importmap.json --unstable server.js

cache:
	deno cache --reload  rpc.ts