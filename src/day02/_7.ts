// 含式特徵式
type greet = (name: string) => string;

const greet: greet = (name) => {
  return 'Hello ' + name;
}
console.log(greet('Nathan'));

type Log = (message: string, userId?: string) => void;

const log: Log = (message: string, userId = 'Not signed in') => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
}
log('Nathan Cheng');