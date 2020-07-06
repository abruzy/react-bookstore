import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
          <Book key={book.title} book={book} />
        ))}
      </tbody>

    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
