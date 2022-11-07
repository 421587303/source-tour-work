export function isObject(obj: any): boolean {
  return typeof obj === 'object' && obj != null
}

// 判断属性是否为事件
export function isOn(key: string): boolean {
  return key[0] === 'o' && key[1] === 'n'
}
