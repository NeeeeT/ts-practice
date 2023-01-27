// 迭代器 Iterator
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  }
}

console.log('---for of');
for(const n of numbers) {
  console.log(n)
}

const numbs = [...numbers];
console.log('---nums spread');
console.log(numbs);

const [one, two, three, ...rest] = numbers;
console.log('---deconstruct');
console.log(one, two, three);
console.log('---rest -> ', rest);


