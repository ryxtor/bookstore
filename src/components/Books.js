import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/Books';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {
       bookStore.map((book) => (
         <Book
           title={book.title}
           author={book.author}
           category={book.category}
           key={book.item_id}
           id={book.item_id}
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
