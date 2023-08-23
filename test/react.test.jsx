import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

const numbers = Array(10).fill(1).map((x, idx) => idx)

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

const operations = ['+', '-', '*', '/']

const Calculator = () => {
  return (
    <section>
      <h1>Calculator</h1>

      <div role='grid'>
        {
          rows.map((row, idx) => (
            <div role='row' key={idx}>
              {row.map(number => (
                <span key={number}> {number} </span>)
              )}

            </div>
          ))

        }
        {
          operations.map(operation => (
            <span key={operation}>{operation}</span>
          ))
        }
      </div>
    </section>
  )
}

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })
  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })
  it('should render numbers calculator input numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => {
      screen.getByText(number)
    })
  })
  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    // console.log(rows) // trae el array rows, que tiene 4 elementos, va concatenando todos lso que cumplan el role
    expect(rows.length).toBe(4)
  })
  it('should render operations', () => {
    render(<Calculator />)
    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })
})
