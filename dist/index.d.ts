declare module 'esbuild-demo/a' {
  export function a(n: number): number;

}
declare module 'esbuild-demo/b' {
  export function b(s: string): string;

}
declare module 'esbuild-demo/index' {
  export function myFunc(n: number, s: string): string;

}
declare module 'esbuild-demo' {
  import main = require('esbuild-demo/src/index');
  export = main;
}