import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/Books';

const percentage = 64;

const Book = ({
  title,
  author,
  category,
  id,
}) => {
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container" id={id}>
      <div>
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
        <button type="button" className="comment-btn">Comments</button>
        <button type="button" onClick={remove} className="remove-btn">Remove</button>
        <button type="button" className="edit-btn">Edit</button>
      </div>
      <div className="progress-container">
        <CircularProgressbar value={percentage} className="progress-bar" />
        <div>
          <p className="porcentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
