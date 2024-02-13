import { getBooks } from "./books";

jest.mock("../data/books.ts", () => ({
  books: new Array(2).fill({
    title: `The Alchemist`,
    author: "Paulo Coelho",
    page: 12,
    year: 1999,
  }),
}));
jest.mock("./books.ts", () => ({
  ...jest.requireActual("./books.ts"),
}));

it("returns 10 books", () => {
  expect(getBooks(1)).toStrictEqual([
    {
      title: `The Alchemist`,
      author: "Paulo Coelho",
      page: 12,
      year: 1999,
    },
  ]);
});
