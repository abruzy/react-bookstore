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
  books, filter, removeBook, changeFilter,
}) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  return (
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
            <Book key={book.title} book={book} removeBook={removeBook} />
          ))}
        </tbody>
      </table>
      <CategoryFilter handleChange={handleFilterChange} />
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
  changeFilter: e => dispatch(CHANGE_FILTER(e)),
});

export default connect(mapStateToProps, mapDispatchToProps, null)(BooksList);
