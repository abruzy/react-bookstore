const CREATE_BOOK = book => ({
  type: 'CREATE BOOK',
  book,
});

const REMOVE_BOOK = id => ({
  type: 'REMOVE BOOK',
  id,
});

const CHANGE_FILTER = filter => ({
  type: 'CHANGE FILTER',
  filter,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
