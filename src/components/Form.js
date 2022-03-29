import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/Books';

const genres = [
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
  const [genre, setGenre] = useState('');
  // Generate a random ID with uuid package
  const id = v4();

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      id,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={submitBook}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book Title" />
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Author" />
        <select defaultValue="default" onChange={(e) => setGenre(e.target.value)}>
          <option value="default" disabled>Category</option>
          {genres.map((genre) => (<option key={genre}>{genre}</option>))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
