import PropTypes from 'prop-types';

const Book = ({ data }) => {
  const { genre, title, author } = data;

  return (
    <div className="book-container">
      <div>
        <div className="book-info">
          <p className="book-genre">{genre}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
        <button type="button" className="remove-btn">Remove</button>
      </div>
      <div>
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
