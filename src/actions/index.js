const CREATE_BOOK = book => ({
  type: 'CREATE BOOK',
  book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE BOOK',
  book,
});

const CHANGE_FILTER = filter => ({
  type: 'CHANGE FILTER',
  filter,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
