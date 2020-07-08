import randomId from '../utils/randomId';

const CREATE_BOOK = (title, category) => ({
  type: 'CREATE BOOK',
  id: randomId(),
  title,
  category,
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
