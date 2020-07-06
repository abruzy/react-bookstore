import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div className="books-list">
    <table className="table-auto mb-20">
      <thead>
        <tr>
          <th className="px-4 py-2"> BOOK ID</th>
          <th className="px-4 py-2">TITLE</th>
          <th className="px-4 py-2">CATEGORY</th>
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
