# Example TypeScript Mod [![NodeJS with Webpack](https://github.com/eaglerforge/example-typescript-mod/actions/workflows/webpack.yml/badge.svg)](https://github.com/eaglerforge/example-typescript-mod/actions/workflows/webpack.yml) [![buildtest.exe](https://github.com/eaglerforge/example-typescript-mod/actions/workflows/Buildtest.yml/badge.svg)](https://github.com/eaglerforge/example-typescript-mod/actions/workflows/Buildtest.yml)
Example EaglerForge mod template. ( too crazy to think )

## How to build?
You can use 3 build systems, bun is for linux - macos machines, esbuild/webpack is cross platform really.

# 1 - webpack

1. Run `npm i`
2. Modify your files accordingly.
2. Run `npm run build`

# 2 - Bun 
WARNING : Bun is experimental on windows

1. Run `npm install -g bun`
2. Run `bun install`
3. Modify your files accordingly.
4. Run `bun run build-bun`
5. profit
# 3 - esbuild
1. Run `npm install -g esbuild`
2. Modify your files accordingly.
3. Run `npn run build-es`
4. profit ( again )
## Notes
- All build tasks will generate source maps and only the 2 and 3 build task will watch your files.
