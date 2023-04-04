# Nx + NestJs + Rspack

## Install dependencies

```bash
yarn
```

## Build the app

```bash
npx nx build nestapp
```

### Ensure build successful:

```bash
node dist/apps/nestapp/main.js
```

## Serve the app

```bash
npx nx serve nestapp
```

### Serve fails

```bash
npx nx serve nestapp

> nx run nestapp:serve:development

Rspack ████████████████████████████████████████ 100% done                           Hash: 7906ba5ef7eccaf1
Time: 20ms
PublicPath: /
          Asset      Size  Chunks             Chunk Names
        main.js  29.4 KiB    main  [emitted]  main
assets/.gitkeep   0 bytes          [emitted]
Entrypoint main = main.js
[tslib] external tslib 42 bytes {main}
[@nestjs/core] external @nestjs/core 42 bytes {main}
[@nestjs/common] external @nestjs/common 42 bytes {main}
[./apps/nestapp/src/main.ts] 560 bytes {main}
[./apps/nestapp/src/app/app.module.ts] 250 bytes {main}
[./apps/nestapp/src/app/app.service.ts] 164 bytes {main}
[./apps/nestapp/src/app/app.controller.ts] 265 bytes {main}
[./node_modules/@swc/helpers/src/_ts_decorate.mjs] 46 bytes {main}
[./node_modules/@swc/helpers/src/_ts_metadata.mjs] 46 bytes {main}

 ——————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target serve for project nestapp


Debugger listening on ws://localhost:9229/4231d962-0100-4001-9e48-61604c23185b
Debugger listening on ws://localhost:9229/4231d962-0100-4001-9e48-61604c23185b
For help, see: https://nodejs.org/en/docs/inspector
   View logs and investigate cache misses at https://nx.app/runs/nGyBAwfiOZ

TypeError: The "id" argument must be of type string. Received undefined
    at new NodeError (node:internal/errors:399:5)
    at validateString (node:internal/validators:163:11)
    at Module.require (node:internal/modules/cjs/loader:1134:3)
    at require (node:internal/modules/cjs/helpers:110:18)
    at Object.<anonymous> (/Users/katerina/Projects/nrwl/test_nx_workspaces/my-repo/packages/js/src/executors/node/node-with-require-overrides.ts:20:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Function.Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
```

The issue is that `NX_FILE_TO_RUN` is not set in the environment variables. If set manually, it works. The problem is that `event.outfile` is undefined.