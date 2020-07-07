import React from 'react';
import '../styles/main.css';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App block w-6/12 mt-10 m-auto">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
