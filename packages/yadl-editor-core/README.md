# How to build editor


## Create Editor Component

- `nvm use 22`
- `npm run build:editor`

## Create Langium Component

- `cd yadl-lang`
- `npm run langium:generate`
- `npm run build`
- `npm run build:web`
- `npm run build:worker`

Then copy generated worker file to target project `static/worker/yadl-server-worker.js`

