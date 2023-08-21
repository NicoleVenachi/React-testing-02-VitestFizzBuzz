export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multipler, word]) => {
      if ((number % multipler) === 0) output += word // concatenea fizz, luego buzz
    })

  // if (((number % 3) === 0) && ((number % 5) === 0)) return 'fizzbuzz'
  // if ((number % 3) === 0) return 'fizz'
  // if ((number % 5) === 0) return 'buzz'

  // si output es vacio, devolveria el number (no era dvisible entre nada)
  return output === '' ? number : output
}
