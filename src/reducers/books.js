const randomId = () => Math.floor(Math.random() * 100);

const BooksArray = [
  { id: randomId(), title: 'Do androids dream of electric sheep?', category: 'Action' },
  { id: randomId(), title: 'Eveything I eve told you', category: 'Biography' },
  { id: randomId(), title: 'Are you there', category: 'History' },
  { id: randomId(), title: 'The devils wears', category: 'Horror' },
  { id: randomId(), title: 'The curious incident', category: 'Kids' },
  { id: randomId(), title: 'How to win friends', category: 'Learning' },
  { id: randomId(), title: 'Cloudy with a chance', category: 'Sci-Fi' },
];

const books = (state = BooksArray, action) => {
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
