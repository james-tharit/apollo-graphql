import { getWord } from "../utils/words.js"

type BookType = {
  title: string
  author: string
}

export const getBooks = (n = 10):BookType[] => {
  const books = [];
  for(let i = 0; i < n; i++){
    let book = {title: getWord(), author: `${getWord()} ${getWord()}`};
    books.push(book);
  }

  return books;
}
