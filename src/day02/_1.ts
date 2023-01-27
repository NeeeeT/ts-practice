// TypeError
function sum() {
  return Array.from(arguments)
  .reduce((total, n) => total + n, 0);
}

// console.log(sum(1,2,3,4,5));