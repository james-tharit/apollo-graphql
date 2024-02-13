import { books } from "../data/books";

type BookType = {
  title: string;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  year: number;
};

export const getBooks = (n = 10): BookType[] => books.slice(0, n);
