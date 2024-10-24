const answer = require('../src/fizzbuzz.js')

// Asked Copilot to generate tests.
// It generated the code below.
it('FizzBuzzes', () => {
  expect(answer).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz'
  ])
})
describe('Individual FizzBuzz values', () => {
  it('returns 1 for i = 1', () => {
    expect(answer[0]).toBe(1)
  })

  it('returns 2 for i = 2', () => {
    expect(answer[1]).toBe(2)
  })

  it("returns 'Fizz' for i = 3", () => {
    expect(answer[2]).toBe('Fizz')
  })

  it('returns 4 for i = 4', () => {
    expect(answer[3]).toBe(4)
  })

  it("returns 'Buzz' for i = 5", () => {
    expect(answer[4]).toBe('Buzz')
  })

  it("returns 'Fizz' for i = 6", () => {
    expect(answer[5]).toBe('Fizz')
  })

  it('returns 7 for i = 7', () => {
    expect(answer[6]).toBe(7)
  })

  it('returns 8 for i = 8', () => {
    expect(answer[7]).toBe(8)
  })

  it("returns 'Fizz' for i = 9", () => {
    expect(answer[8]).toBe('Fizz')
  })

  it("returns 'Buzz' for i = 10", () => {
    expect(answer[9]).toBe('Buzz')
  })

  it('returns 11 for i = 11', () => {
    expect(answer[10]).toBe(11)
  })

  it("returns 'Fizz' for i = 12", () => {
    expect(answer[11]).toBe('Fizz')
  })

  it('returns 13 for i = 13', () => {
    expect(answer[12]).toBe(13)
  })

  it('returns 14 for i = 14', () => {
    expect(answer[13]).toBe(14)
  })

  it("returns 'FizzBuzz' for i = 15", () => {
    expect(answer[14]).toBe('FizzBuzz')
  })
})
