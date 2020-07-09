import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Book.scss';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to delete this book?')) {
      removeBook(book.id);
    }
  };

  return (
    <div className="Lesson-Panel">
      <div className="title">{book.title}</div>
      <div className="category">{book.category}</div>
      <button type="button" className="delete-button" onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
