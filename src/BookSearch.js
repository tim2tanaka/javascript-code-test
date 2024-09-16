import { fetchApi } from './helper/fetchApi.js';
import { xmlParser } from './helper/xmlParser.js';

export class BookSearchApi {
  constructor(baseUrl, responseType) {
    this.baseUrl = baseUrl;
    this.responseType = responseType;
  }
  getBooks = async (limit = 50) => {
    const url = `${this.baseUrl}/books/?limit=${limit}`;
    const fetchOptions = {
      method: 'GET',
      headers: {
        ['Content-Type']: `${this.responseType}`,
      },
    };
    const xmlOptions = {
      ignoreAttributes: true,
    };
    const resData = await fetchApi(url, fetchOptions);
    if (resData) {
      const books =
        this.responseType === 'application/xml'
          ? xmlParser(resData, xmlOptions)
          : resData;
      return books.map((book) => {
        return {
          id: book.id,
          title: book.title,
          author: book.author || null,
          publication_year: book.publication_year || null,
          genre: book.genre || null,
          description: book.description || null,
          cover_image: book.cover_image || null,
          isbn: book.isbn || null,
          quantity: book.quantity || null,
          price: book.price || null,
          publisher: book.price || null,
        };
      });
    }
    return null;
  };

  getBooksBy = async (searchType, search, limit) => {
    let url = null;
    if (searchType === 'author')
      url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'title')
      url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'publisher')
      url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'yearPublished')
      url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (!url) return null;
    const fetchOptions = {
      method: 'GET',
      headers: {
        ['Content-Type']: `${this.responseType}`,
      },
    };
    const xmlOptions = {
      ignoreAttributes: true,
    };
    const resData = await fetchApi(url, fetchOptions);
    const books =
      this.responseType === 'application/xml'
        ? xmlParser(resData, xmlOptions)
        : resData;
    if (books) {
      return books.map((book) => {
        return {
          id: book.id,
          title: book.title,
          author: book.author || null,
          publication_year: book.publication_year || null,
          genre: book.genre || null,
          description: book.description || null,
          cover_image: book.cover_image || null,
          isbn: book.isbn || null,
          quantity: book.quantity || null,
          price: book.price || null,
          publisher: book.price || null,
        };
      });
    }
  };
}
