import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

/*
Escrbir una funcion que al pasar un núero:
  - Muestre 'fizz', si es múltiplo de 3.
  - Muestre 'buzz', si es múltiplo de 5.
  - Muestre 'fizzbuzz', si es múltiplo de 3 y 5.
  - Muestre el número, sino es múltiplo de ninguno de los anteriores.
*/

describe('fizzbuzz', () => {
  // este se desactivo posteriormente porque es redudante
  // it('should be a function', () => {
  //   // test 1, verifico si es una función
  //   expect(typeof fizzbuzz).toBe('function')
  // })
  it('shoud throw if not number is provided as parameter', () => {
    // verifico si tira error o no
    expect(() => fizzbuzz()).toThrow()
  })
  it('shoud throw a specific error message if not number is provided as parameter', () => {
    // verifico si msg dice algo de number al no pasar numeros
    expect(() => fizzbuzz()).toThrow(/number/)
  })

  it('shoud throw a specific error message if not a number is provided as parameter', () => {
    // verifico si msg dice algo concreto al pasar un NaN
    // hice llamado a la funcion con input
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  // esto se desactivo posteriormente porque es redudante
  // it('shoud return 1, if number provided 1', () => {
  //   expect(fizzbuzz(1)).toBe(1)
  // })
  // it('shoud return 2, if number provided 2', () => {
  //   expect(fizzbuzz(2)).toBe(2)
  // })
  it('shoud return "fizz", if number provided 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('shoud return "fizz", if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  // Ya está cubierto en el algoritmo
  // it('shoud return 4, if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('shoud return "buzz", if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('shoud return "fizzbuzz", if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
  it('shoud return the number itself, if number is not multiple of 3 or 5', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
})
