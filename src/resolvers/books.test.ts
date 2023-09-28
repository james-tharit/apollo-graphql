import {getBooks} from "./books"

jest.mock('../utils/words.ts', () => ({
  getWord: jest.fn().mockReturnValue('fword')
}))
jest.mock('./books.ts', () => ({
  ...jest.requireActual('./books.ts'),
}))

it('returns 10 books', () => {
  expect(getBooks()).toStrictEqual([
    ...new Array(10).fill({title:"fword", author: "fword fword"})
  ])
})
