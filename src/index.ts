import { a } from 'a';
import { b } from 'b';

export function myFunc(n: number, s: string) {
  return a(n) + b(s);
}

console.log(myFunc(1, '2'));
