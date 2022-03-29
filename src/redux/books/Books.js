const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
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

export default reducer;
