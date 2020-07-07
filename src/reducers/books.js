const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE BOOK':
      return [...state, action.book];
    case 'REMOVE BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
