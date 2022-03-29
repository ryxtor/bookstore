import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);

  return (
    <div>
      {
       bookStore.map((book) => (
         <Book
           title={book.title}
           author={book.author}
           genre={book.genre}
           key={book.id}
           id={book.id}
         />
       ))
}
    </div>
  );
};

const Books = () => (
  <div className="books-section">
    <BookList />
    <Form />
  </div>
);

export default Books;
