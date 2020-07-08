/* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { addBook } = this.props;

    const book = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };

    if (title !== '' && category !== '') {
      addBook(book);

      this.setState({
        title: '',
        category: '',
      });
    }
  }

  render() {
    const categories = ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    const { title, category } = this.state;

    return (
      <form className="w-full max-w-sm" onSubmit={this.handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
              {' '}
              Book Title:
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="title" id="title" value={title} onChange={this.handleChange} />
          </div>
          <div className="relative">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
              {' '}
              Category:
            </label>

            <select className="flex ml-5 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="category" value={category} onChange={this.handleChange}>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {' '}
                  {cat}
                  {' '}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Add Book" />
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(CREATE_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
