import { getWord } from "./words"

jest.mock("./words", () => ({ 
  ...jest.requireActual("./words"),
  getWord: jest.fn().mockReturnValue('abatis')
}))

describe('words',() => {
  it('returns word', () => {
    expect(getWord()).toBe('abatis')
  })
})

