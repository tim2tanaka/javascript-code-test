import { BookSearchApi } from './BookSearch.js';

// BookSearchApi1
const responseType1 = 'application/json';
const baseUrl1 = 'https://freetestapi.com/api/v1/';
const api1 = new BookSearchApi(baseUrl1, responseType1);
const books1 = await api1.getBooks(10);
console.log('books: ', books1);

// BookSearchApi2
// const responseType2 = 'application/xml'
// const baseUrl2 = 'https://freetestapi.com/api/v1/authors';
// const api2 = new BookSearchApi(baseUrl2, responseType2);
// const books2 = await api2.getBooksBy('author', 'Shakespeare', 10);
// console.log(books2);
