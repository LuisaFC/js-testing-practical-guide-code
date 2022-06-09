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

it('should yiel NaN if at least one invalid number is provided', () => {
  const inputs = [1, 'invalid']

  const result = add(inputs)

  expect(result).toBeNaN()
})


it('should yield correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2', '3']
  const resultExpeceted = numbers.reduce((previousVal, currentVal) => +previousVal + +currentVal, 0)

  const result = add(numbers)

  expect(result).toBe(resultExpeceted)
})  

it('should yield 0 if an empty array is provided', () => {
  const numbers = []

  const result = add(numbers)

  expect(result).toBe(0)
})

it('should throw an error if no value is passed into the function', () => {

  const resultFn = () => {
    add()
  }

  expect(resultFn).toThrow(/is not iterable/)
})

it('should throw an error if provded with multiple arguments instead of an array', () => {
  const num1 = 1
  const num2 = 2

  const resultFn = () => {
    add(num1, num2)
  }

  expect(resultFn).toThrow(/is not iterable/)
})