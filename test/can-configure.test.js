import { describe, expect, it } from 'vitest'

const canConfigure = (from, to) => {
  // if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isDifferentLength = from.length !== to.length
  if (isDifferentLength) return false

  const hasSameUniqueLetters = (new Set(from).size === new Set(to).size)
  if (!hasSameUniqueLetters) return false

  return true
}

/*
Escrbir una funcion que al pasar un núero:
  - Return false, si los dos inputs recibidos tienen distinta length
  - Return false, si las letras se repiten en un mismo input (numero de letras unicas, varia en los strings)
  - Muestre 'fizzbuzz', si es múltiplo de 3 y 5.
  - Muestre el número, sino es múltiplo de ninguno de los anteriores.
*/

describe('canReconfigure', () => {
  it('should be a function', () => {
    expect(canConfigure).toBeTypeOf('function')
  })
  // Lo quito por refactor
  // it('should throw if first parameter is missing', () => {
  //   // veo si tira o no algo
  //   expect(() => canConfigure()).toThrow()
  // })
  it('should throw if first parameter is not a string', () => {
    // veo si tira o no algo
    expect(() => canConfigure()).toThrow()
  })

  // Lo quito por refactor
  // it('should throw if second parameter is missing', () => {
  //   // veo si tira o no algo
  //   expect(() => canConfigure('a')).toThrow()
  // })
  it('should throw if second parameter is not a string', () => {
    // veo si tira o no algo
    expect(() => canConfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    // veo si tira o no algo
    expect(canConfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('should return false if strings provided have different length', () => {
    // veo si tira o no algo
    expect(canConfigure('a', 'ba')).toBe(false)
  })
  it('should return false if strings provided have different number of unique letters', () => {
    // veo si tira o no algo
    expect(canConfigure('abc', 'ddd')).toBe(false)
  })
})
