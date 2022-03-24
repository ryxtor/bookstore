import Book from './Book';
import Form from './Form';

const booksList = [
  {
    id: 1,
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const Books = () => {
  const newBookList = booksList.map((book) => (<Book data={book} key={book.id} />));

  return (

    <div className="books-section">
      {newBookList}
      <Form />
    </div>
  );
};

export default Books;
