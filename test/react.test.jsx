import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Calculator, operations } from '../src/Calculator'

const numbers = Array(10).fill(1).map((x, idx) => idx)

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
  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox') // role de inpu, si hubiera varias, podr'ia usar data ttrubutes, etc
  })

  it('should show the user input after clicking a number', () => {
    // simulo comportameinto del usaurio
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one) // traigo input, y lo clickeo

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })
  it('should show the user input after clicking several numbers', () => {
    // simulo comportameinto del usaurio
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one) // traigo input, y lo clickeo

    const two = screen.getByText('2')
    fireEvent.click(two) // traigo input, y lo clickeo

    const three = screen.getByText('3')
    fireEvent.click(three) // traigo input, y lo clickeo

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show the user input after clicking numbers and operations', () => {
    // simulo comportameinto del usaurio
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })
  it('should calculate based on user input and show the calculation', () => {
    // simulo comportameinto del usaurio
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const equalSign = screen.getByText('=')
    fireEvent.click(equalSign)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
