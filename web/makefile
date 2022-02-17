config = --allow-net --allow-read --allow-run --allow-env --allow-write --no-check --unstable
dev:
	mode=dev deno run $(config) --import-map import_dev.json  serve.ts

start:
	deno run $(config) --import-map import.json serve.ts

cache:
	deno cache --import-map=import_dev.json --reload --no-check serve.ts