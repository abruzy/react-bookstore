import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
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
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
