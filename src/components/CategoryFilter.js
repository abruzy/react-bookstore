import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/CategoryFilter.scss';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleChange }) => (
  <div className="category-filter">
    <label className="category-label" htmlFor="cat">
      {' '}
      Filter By Category:
    </label>

    <select className="category-button" name="cat" onChange={handleChange}>
      {categories.map(cat => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
