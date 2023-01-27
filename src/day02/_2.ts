// rest parameters
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadicSafe(1,2,3,4,5));