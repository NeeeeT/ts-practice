// 情境式定型
function times(
  f: (index: number) => void,
  n: number = 0
) {
  for(let i = 0; i < n; i++) {
    f(i);
  }
}
times((n) => {
  console.log(n)
}, 5);

// ! wrong case
// function _f(n) {
//   console.log(n);
// }
// times(_f, 4);