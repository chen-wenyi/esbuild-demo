const path = require('path');
const esbuild = require('esbuild');
const { Generator } = require('npm-dts');

const entryPath = path.resolve(__dirname, 'src/index.ts');

esbuild.buildSync({
  entryPoints: [entryPath],
  outfile: path.resolve(__dirname, 'dist/cjs/index.js'),
  format: 'cjs',
  minify: true,
  bundle: true,
});

esbuild.buildSync({
  entryPoints: [entryPath],
  outfile: path.resolve(__dirname, 'dist/esm/index.js'),
  format: 'esm',
  minify: true,
  bundle: true,
});

new Generator({
  entry: entryPath,
  output: path.resolve(__dirname, 'dist/index.d.ts'),
}).generate();
