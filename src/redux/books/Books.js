const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LIST_BOOK = 'bookstore/books/LIST_BOOK';
const POST_BOOK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RGWGAcQ2Il3MCXXsfFzO/books';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case LIST_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const listBooks = (payload) => ({
  type: LIST_BOOK,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const response = await fetch(POST_BOOK);
  const APIbooks = await response.json();
  const books = Object.getOwnPropertyNames(APIbooks).map((id) => ({
    item_id: id,
    ...APIbooks[id][0],
  }));
  dispatch(listBooks(books));
};

export const postBook = (payload) => async (dispatch) => {
  const response = await fetch(POST_BOOK, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(addBook(payload));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  const DELETE_BOOK = `${POST_BOOK}/${id}`;
  const response = await fetch(DELETE_BOOK, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(removeBook(id));
  }
};

export default reducer;
