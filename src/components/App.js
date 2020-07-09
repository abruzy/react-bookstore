import React from 'react';
import '../styles/scss/App.scss';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="panel-bg">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
