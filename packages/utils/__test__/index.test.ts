import {describe, it, expect} from 'vitest'
import {isObject} from '../src' 
describe('测试工具库', () => {
  it('测试isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(1)).toBe(false)
  })
})