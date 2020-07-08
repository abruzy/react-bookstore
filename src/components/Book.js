import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = () => removeBook(book.id);

  return (
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
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" type="button" onClick={handleRemoveBook}>Delete</button>
      </td>
    </tr>
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
