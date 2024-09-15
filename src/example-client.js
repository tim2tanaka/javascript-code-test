import { BookSearchApi1, BookSearchApi2 } from './BookSearchApi.js';

// BookSearchApi1
const client1 = new BookSearchApi1();
const books1 = await client1.getBooks(10);
console.log(books1);

// BookSearchApi2
// const client2 = new BookSearchApi2();
// const books2 = await client2.getBooksBy('books', '2000', 10);
// console.log(books2);