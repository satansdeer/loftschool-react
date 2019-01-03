function* gen() {
  let a = 10;
  console.log(a);
  while (a < 40) {
    const message = yield a;
    console.log(message);
    a = a + 10;
  }
  return 100;
}

const iter = gen();

console.log(iter.next('foo'));
console.log(iter.next('bar'));
console.log(iter.next('baz'));
console.log(iter.next());
