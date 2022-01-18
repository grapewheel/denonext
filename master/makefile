dev:
	mode=dev deno run --allow-all serve.ts

start: 
	deno run --no-check --allow-net --allow-read --allow-env --allow-run --allow-write --import-map=importmap.json --unstable server.js

cache:
	deno cache --reload  serve.ts

prisma.install:
	npm i prisma @prisma/client && rm package.json && rm package-lock.json

prisma.init:
	npx prisma init

prisma.pull:
	npx prisma db pull

prisma.push:
	npx prisma db push

prisma.gen:
	npx prisma generate