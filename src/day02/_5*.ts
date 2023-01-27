// Generator 產生器函式
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while(true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.debug('---費氏數列');
let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next()); // 0
console.log(fibonacciGenerator.next()); // 1
console.log(fibonacciGenerator.next()); // 1
console.log(fibonacciGenerator.next()); // 2
console.log(fibonacciGenerator.next()); // 3
console.log(fibonacciGenerator.next()); // 5
console.log(fibonacciGenerator.next()); // 8
console.log(fibonacciGenerator.next()); // 13

// ! 更精細地定義 Generator Type
function* createNumbers(): IterableIterator<number> {
  let a = 0;
  while (true) {
    yield a++;
  }
}
console.debug('---原數遞增');
const nums = createNumbers();
console.log(nums.next());
console.log(nums.next());
console.log(nums.next());
console.log(nums.next());
console.log(nums.next());