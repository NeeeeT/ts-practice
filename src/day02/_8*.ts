// 情境式定型
function times(
  f: (index: number) => void,
  n: number
) {
  for(let i = 0; i < n; i++) {
    f(i);
  }
}
times(n => console.log(n), 4);

// ! wrong case
// function _f(n) {
//   console.log(n);
// }
// times(_f, 4);