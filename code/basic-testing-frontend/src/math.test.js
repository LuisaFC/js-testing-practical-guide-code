import {add} from './math'
import {it, expect} from 'vitest'

it('should summarize all number values in an array', () => {
  //arrange
  const numbers = [1, 2, 3]
  const resultExpeceted = numbers.reduce((previousVal, currentVal) => previousVal + currentVal, 0)

  //act
  const result = add(numbers)

  //assert
  expect(result).toBe(resultExpeceted)
})