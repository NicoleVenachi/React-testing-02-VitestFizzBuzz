import { useState } from 'react'
import { evaluate } from 'mathjs'

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']

const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = (number) => () => setValue(value.concat(number))
  // paso number y devuelvo funcion

  return (
    <section>
      <h1>Calculator</h1>

      <input type='text' value={value} readOnly />

      <div role='grid'>
        {
          rows.map((row, idx) => (
            <div role='row' key={idx}>
              {row.map(number => (
                <button
                  key={number}
                  onClick={createHandleClick(number)}
                > {number}
                </button>
              )
              )}

            </div>
          ))

        }
        {
          operations.map(operation => (
            <button
              key={operation}
              onClick={createHandleClick(operation)}
            >{operation}
            </button>
          ))
        }
        <button onClick={() => setValue(evaluate(value))}> {equalSign} </button>
      </div>
    </section>
  )
}
