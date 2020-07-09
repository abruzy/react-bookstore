import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/scss/BooksList.scss';

const filteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter);
};

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleFilterChange = event => {
    const { value } = event.target;
    changeFilter(value);
  };

  return (
    <div className="book-list">
      <div className="header">
        <div className="header-title">Bookstore CMS</div>
        <div className="category-container">
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
      </div>
      <div className="books-container">
        {filteredBooks(books, filter).map(book => (
          <Book key={book.title} book={book} removeBook={removeBook} />
        ))}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(REMOVE_BOOK(id)),
  changeFilter: value => dispatch(CHANGE_FILTER(value)),
});

export default connect(mapStateToProps, mapDispatchToProps, null)(BooksList);
