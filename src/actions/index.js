const CREATE_BOOK = book => ({
  type: 'CREATE BOOK',
  book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE BOOK',
  book,
});

export { CREATE_BOOK, REMOVE_BOOK };
