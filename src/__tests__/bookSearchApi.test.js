import { BookSearchApi1 } from '../BookSearchApi.js';
import { BookSearchApi2 } from '../BookSearchApi.js';

describe('BookSearch', () => {
  describe('BookSearchApi1', () => {
    const expectedBooks = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publication_year: 1960,
        genre: ['Fiction', 'Classic'],
        description: 'A classic novel depicting racial injustice in the American South.',
        cover_image: 'A classic novel depicting racial injustice in the American South.',
        isbn: 'A classic novel depicting racial injustice in the American South.',
        quantity: null,
        price: null,
        publisher: null
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        publication_year: 1949,
        genre: ['Dystopian', 'Science Fiction'],
        description: 'A dystopian novel portraying a totalitarian society.',
        cover_image: 'A dystopian novel portraying a totalitarian society.',
        isbn: 'A dystopian novel portraying a totalitarian society.',
        quantity: null,
        price: null,
        publisher: null
      },
      {
        id: 3,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publication_year: 1813,
        genre: ['Classic', 'Romance'],
        description: 'A classic novel exploring themes of love, marriage, and social norms.',
        cover_image: 'A classic novel exploring themes of love, marriage, and social norms.',
        isbn: 'A classic novel exploring themes of love, marriage, and social norms.',
        quantity: null,
        price: null,
        publisher: null
      }
    ];
    const limit = 10;
    it('returns books when getBooks is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      const client = new BookSearchApi1;
      const books = await client.getBooks(limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(expectedBooks);
    });
    it('returns partial book data when getBooks is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      const expectedBooks = [
        {
          id: 1,
          title: 'To Kill a Mockingbird',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 2,
          title: '1984',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 3,
          title: 'Pride and Prejudice',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        }
      ];
      const client = new BookSearchApi1;
      const books = await client.getBooks(limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(expectedBooks);
    });
    it('fails to returns books when getBooks is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: false,
          status: 401,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      fetch.mockRejectedValueOnce(new Error("Response status: 401"));
      const client = new BookSearchApi1;
      const books = await client.getBooks(limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(null);
      fetch.mockRestore();
    });
    it('returns books when getBooksBy "arthor" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'author';
      const search = 'George Orwell';
      const client = new BookSearchApi1;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns books when getBooksBy "title" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'title';
      const search = '1984';
      const client = new BookSearchApi1;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns books when getBooksBy "publication_year" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'yearPublished';
      const search = '2021';
      const client = new BookSearchApi1;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns books when getBooksBy "publisher" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'publisher';
      const search = 'Harper Collins';
      const client = new BookSearchApi1;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns partial book data when getBooksBy is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      const expectedBooks = [
        {
          id: 1,
          title: 'To Kill a Mockingbird',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 2,
          title: '1984',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 3,
          title: 'Pride and Prejudice',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        }
      ];
      const searchType = 'author';
      const search = 'George Orwell';
      const client = new BookSearchApi1;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(expectedBooks);
    });
    it('fails to returns books when getBooksBy "yearPublished" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'year';
      const search = '1813';
      const client = new BookSearchApi1;
      const books = await client.getBooksBy(searchType, search, limit);
      // expect(await client.getBooksBy(searchType, search, limit)).toThrow(`"year" search type is not supported.
      //     Supported search types are: books | author | title | publisher | isbn`);
      expect(fetch).toHaveBeenCalledTimes(0);
      expect(books).toEqual(null);
      fetch.mockRestore();
    });
  });
  
  describe('BookSearchApi2', () => {
    const expectedBooks = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publication_year: 1960,
        genre: ['Fiction', 'Classic'],
        description: 'A classic novel depicting racial injustice in the American South.',
        cover_image: 'A classic novel depicting racial injustice in the American South.',
        isbn: 'A classic novel depicting racial injustice in the American South.',
        quantity: null,
        price: null,
        publisher: null
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        publication_year: 1949,
        genre: ['Dystopian', 'Science Fiction'],
        description: 'A dystopian novel portraying a totalitarian society.',
        cover_image: 'A dystopian novel portraying a totalitarian society.',
        isbn: 'A dystopian novel portraying a totalitarian society.',
        quantity: null,
        price: null,
        publisher: null
      },
      {
        id: 3,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publication_year: 1813,
        genre: ['Classic', 'Romance'],
        description: 'A classic novel exploring themes of love, marriage, and social norms.',
        cover_image: 'A classic novel exploring themes of love, marriage, and social norms.',
        isbn: 'A classic novel exploring themes of love, marriage, and social norms.',
        quantity: null,
        price: null,
        publisher: null
      }
    ];
    const limit = 10;
    it('returns books when getBooks is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      const limit = 10;
      const client = new BookSearchApi2;
      const books = await client.getBooks(limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(expectedBooks);
    });
    it('returns partial book data when getBooks is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      const expectedBooks = [
        {
          id: 1,
          title: 'To Kill a Mockingbird',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 2,
          title: '1984',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 3,
          title: 'Pride and Prejudice',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        }
      ];
      const client = new BookSearchApi2;
      const books = await client.getBooks(limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(expectedBooks);
    });
    it('fails to returns books when getBooks is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: false,
          status: 401,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      fetch.mockRejectedValueOnce(new Error("Response status: 401"));
      const limit = 10;
      const client = new BookSearchApi2;
      const books = await client.getBooks(limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(null);
      fetch.mockRestore();
    });
    it('returns books when getBooksBy "arthor" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'author';
      const search = 'George Orwell';
      const client = new BookSearchApi2;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns books when getBooksBy "title" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'title';
      const search = '1984';
      const client = new BookSearchApi2;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns books when getBooksBy "publisher" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'publisher';
      const search = 'Harper Collins';
      const client = new BookSearchApi2;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns books when getBooksBy "publication_year" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'yearPublished';
      const search = '2021';
      const client = new BookSearchApi2;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(Array(expectedBooks[1]));
    });
    it('returns partial book data when getBooksBy is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            expectedBooks
          ),
        })
      );
      const expectedBooks = [
        {
          id: 1,
          title: 'To Kill a Mockingbird',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 2,
          title: '1984',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        },
        {
          id: 3,
          title: 'Pride and Prejudice',
          author: null,
          publication_year: null,
          genre: null,
          description: null,
          cover_image: null,
          isbn: null,
          quantity: null,
          price: null,
          publisher: null
        }
      ];
      const searchType = 'author';
      const search = 'George Orwell';
      const client = new BookSearchApi2;
      const books = await client.getBooksBy(searchType, search, limit);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(books).toEqual(expectedBooks);
    });
    it('fails to returns books when getBooksBy "yearPublished" is called', async () => {
      jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            Array(expectedBooks[1])
          ),
        })
      );
      const searchType = 'year';
      const search = '1813';
      const client = new BookSearchApi2;
      const books = await client.getBooksBy(searchType, search, limit);
      // expect(await client.getBooksBy(searchType, search, limit)).toThrow(`"year" search type is not supported.
      //     Supported search types are: books | author | title | publisher | isbn`);
      expect(fetch).toHaveBeenCalledTimes(0);
      expect(books).toEqual(null);
      fetch.mockRestore();
    });
  });
})
