function fancyDate(this: any) {
  // const d = new Date();
  return `${this.getDate()}/${this.getMonth()+1}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date));