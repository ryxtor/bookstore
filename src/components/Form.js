import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useState } from 'react';
import { postBook } from '../redux/books/Books';

const categories = [
  'Action',
  'Adventure',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
];

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  // Generate a random ID with uuid package
  const id = v4();

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      category,
      item_id: id,
    };
    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBook}>
        <input className="input" type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book Title" required />
        <input className="input" type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Author" required />
        <select className="input" name="Category" onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Category</option>
          {categories.map((genre) => (<option key={genre}>{genre}</option>))}
        </select>
        <input className="submit-btn" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Form;
