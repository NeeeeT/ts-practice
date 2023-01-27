// 指定函式特性

// ! Before
// function warnUser(wraning) {
//   if (warnUser.wasCalled) return;
//   warnUser.wasCalled = true;
//   alert(wraning);
// }
// warnUser.wasCalled = false;


// ! After
type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}
const warnUser: WarnUser = (warning: string) => {
  if (warnUser.wasCalled) return;
  warnUser.wasCalled = true;
  alert(warning);
}
warnUser.wasCalled = false;