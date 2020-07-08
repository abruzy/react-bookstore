import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const filteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter);
};

const BooksList = ({
  books, filter, handleRemoveBook, handleFilterChange,
}) => (
  <div className="books-list">
    <table className="table-auto mb-20">
      <thead>
        <tr>
          <th className="px-4 py-2"> Book ID</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {filteredBooks(books, filter).map(book => (
          <Book key={book.title} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
    <CategoryFilter handleFilterChange={handleFilterChange} />
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => { dispatch(REMOVE_BOOK(book)); },
  handleFilterChange: e => dispatch(CHANGE_FILTER(e)),
});

export default connect(mapStateToProps, mapDispatchToProps, null)(BooksList);
