import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { REMOVE_BOOK } from '../actions';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td className="border px-4 py-2">
      {' '}
      {book.id}
      {' '}
    </td>
    <td className="border px-4 py-2">
      {' '}
      {book.title}
      {' '}
    </td>
    <td className="border px-4 py-2">
      {' '}
      {book.category}
      {' '}
    </td>
    <td className="border px-4 py-2">
      {' '}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" type="button" onClick={() => handleRemoveBook(book)}>Delete</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => { dispatch(REMOVE_BOOK(book)); },
});

export default connect(null, mapDispatchToProps)(Book);
