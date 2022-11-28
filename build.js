require('esbuild').build({
    entryPoints: ['index.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/server.js',
    target: 'esnext'
}).catch(() => process.exit(1))