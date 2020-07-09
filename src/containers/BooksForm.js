import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions';
import randomId from '../utils/randomId';
import '../styles/scss/BooksForm.scss';

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
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { addBook } = this.props;

    const book = {
      id: randomId(),
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
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    const { title, category } = this.state;

    return (
      <div className="books-form">
        <h1 className="heading">ADD NEW BOOK</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="input-title" placeholder="Enter a book title" name="title" id="title" value={title} onChange={this.handleChange} />
          <select id="" className="input-category" name="category" value={category} onChange={this.handleChange}>
            <option value="default">Select Book Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {' '}
                {cat}
                {' '}
              </option>
            ))}
          </select>
          <input className="submit-button" type="submit" value="Add Book" />
        </form>
      </div>
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
