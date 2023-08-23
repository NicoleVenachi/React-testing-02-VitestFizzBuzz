import { describe, expect, it } from 'vitest'

const canConfigure = (from, to) => {
  // if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = (new Set(from).size === new Set(to).size)
  if (!hasSameUniqueLetters) return false

  // para verificar lo del orden, guardo trasnformaciones en objeto
  const transformations = []
  for (let i = 0; i < from.length; i++) {
    // guardo las letras
    const fromLetter = from[i]
    const toLetter = to[i]

    // guardo la letra que tengo guardada en las transforamciones, en esa posicion, para ver si son la misma. Sino hay ninguna, undefined
    const storedLetter = transformations[fromLetter]

    // si existe la letra, veo si es diferente a la que deseo convertir, si ese es el caso, false
    if (storedLetter && storedLetter !== toLetter) return false

    // si son iguales, true
    transformations[fromLetter] = toLetter
  }

  return true
}

/*
Escrbir una funcion que al pasar un núero:
  - Return false, si los dos inputs recibidos tienen distinta length
  - Return false, si el numero de letras unicas, varia en los strings (pueden repetirse letras, pero mismo numero de letras unicas en ambos)
  - Return false, si letras a transformar son diferentes (CREO)
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
  it('should return false if strings provided have different length, evem with the same number of unique letters', () => {
    // veo si tira o no algo
    expect(canConfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    // veo si tira o no algo
    expect(canConfigure('XBOX', 'XXBO')).toBe(false)
  })
})
