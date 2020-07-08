import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';

const BooksList = ({ books, handleRemoveBook }) => (
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
        {books.sort((a, b) => a.id - b.id).map(book => (
          <Book key={book.title} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>

    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => { dispatch(REMOVE_BOOK(book)); },
});

export default connect(mapStateToProps, mapDispatchToProps, null)(BooksList);
