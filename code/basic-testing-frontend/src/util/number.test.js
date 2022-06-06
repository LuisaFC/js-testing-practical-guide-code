import {it, expect} from 'vitest'
import {transformToNumber}  from './numbers'

it('should transform a string number to number of type number', () => {
  const input = '1'
  const result = transformToNumber(input)

  const expectResult = +input

  //expect(result).toBe(expectResult)
  expect(result).toBeTypeOf('number')
})

it('should yield NaN for non-transformable values', () => {
  const input = 'invalid'
  const input2  = 'invalid'

  const result = transformToNumber(input)
  const result2 = transformToNumber(input2)
  
  expect(result).toBeNaN()
  expect(result2).toBeNaN()
})