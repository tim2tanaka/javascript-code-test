import { fetchApi } from './helper/fetchApi.js';
export class BookSearchApi1 {
  responseType = 'application/json'
  baseUrl = 'https://freetestapi.com/api/v1/';
  options = {
    method: "GET",
    headers: {
      "Content-Type": this.responseType,
    },
  };
  
  getBooks = async (limit = 50) => {
    const url = `${this.baseUrl}/books/?limit=${limit}`;
    const books = await fetchApi(url, this.options);
    if (books) {
      return books.map((book) => {
        return {
          id: book.id,
          title: book.title,
          author: book.author || null,
          publication_year: book.publication_year || null,
          genre: book.genre || null,
          description: book.description || null,
          cover_image: book.description || null,
          isbn: book.description || null,
          quantity: book.quantity || null,
          price: book.price || null,
          publisher:book.price || null
        }
      })
    }
    return null;
  };
  
  getBooksBy = async (searchType, search, limit) => {
    let url = null;
    if (searchType === 'author') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'title') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'publisher') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'yearPublished') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (!url) {
      // throw new Error(
      // `"${searchType}" search type is not supported.
      // Supported search types are: books | author | title | publisher | isbn`
      // )
      return null;
    }; 
    const books = await fetchApi(url, this.options);
    if (books) {
      return books.map((book) => {
        return {
          id: book.id,
          title: book.title,
          author: book.author || null,
          publication_year: book.publication_year || null,
          genre: book.genre || null,
          description: book.description || null,
          cover_image: book.description || null,
          isbn: book.description || null,
          quantity: book.quantity || null,
          price: book.price || null,
          publisher:book.price || null
        }
      })      
    }
  };
};

export class BookSearchApi2 {
  responseType = 'application/xml'
  baseUrl = 'https://freetestapi.com/api/v1/';
  options = {
    method: "POST",
    headers: {
      "Content-Type": this.responseType,
    },
  }

  getBooks = async (limit = 50) => {
    const url = `${this.baseUrl}/books/?limit=${limit}`;
    const books = await fetchApi(url, this.options);
    if (books){  return books.map((book) => {
      return {
        id: book.id,
        title: book.title,
        author: book.author || null,
        publication_year: book.publication_year || null,
        genre: book.genre || null,
        description: book.description || null,
        cover_image: book.description || null,
        isbn: book.description || null,
        quantity: book.quantity || null,
        price: book.price || null,
        publisher:book.price || null
      }
    }
    )
    }
    return null;
  };
  
  getBooksBy = async (searchType, search, limit) => {
    let url = null;
    if (searchType === 'author') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'title') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'publisher') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (searchType === 'yearPublished') url = `${this.baseUrl}/${search}?limit=${limit}`;
    if (!url) {
      // throw new Error(
      // `"${searchType}" search type is not supported.
      // Supported search types are: books | author | title | publisher | isbn`
      // )
      return null;
    };
    const books = await fetchApi(url, this.options);
    return books.map((book) => {
      return {
        id: book.id,
        title: book.title,
        author: book.author || null,
        publication_year: book.publication_year || null,
        genre: book.genre || null,
        description: book.description || null,
        cover_image: book.description || null,
        isbn: book.description || null,
        quantity: book.quantity || null,
        price: book.price || null,
        publisher:book.price || null
      }
    })
  };
};

// var result = [];
// var xhr = new XMLHttpRequest();
// xhr.open(
//   "GET",
//   "http://api.book-seller-example.com/by-author?q=" +
//     authorName +
//     "&limit=" +
//     limit +
//     "&format=" +
//     this.format
// );
// xhr.onload = function () {
//   if (xhr.status == 200) {
//     if (this.format == "json") {
//       var json = JSON.parse(xhr.responseText);

//       result = json.map(function (item) {
//         return {
//           title: item.book.title,
//           author: item.book.author,
//           isbn: item.book.isbn,
//           quantity: item.stock.quantity,
//           price: item.stock.price,
//         };
//       });
//     } else if (this.format == "xml") {
//       var xml = xhr.responseXML;

//       result = xml.documentElement.childNodes.map(function (item) {
//         return {
//           title: item.childNodes[0].childNodes[0].nodeValue,
//           author: item.childNodes[0].childNodes[1].nodeValue,
//           isbn: item.childNodes[0].childNodes[2].nodeValue,
//           quantity: item.childNodes[1].childNodes[0].nodeValue,
//           price: item.childNodes[1].childNodes[1].nodeValue,
//         };
//       });
//     }

//     return result;
//   } else {
//     alert("Request failed.  Returned status of " + xhr.status);
//   }
// };
// xhr.send();