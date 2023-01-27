// 重載函式 Overloaded Function
type CreateElement = {
  // 重載參數型別，依據字面值進行比對，如 switch case
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: string): HTMLElement // * 加入總受（catchall case）情況
}
let _createElement: CreateElement = (tag: string): HTMLElement => {
  // ...
}


// function createElement(tag: 'a'): HTMLAnchorElement;