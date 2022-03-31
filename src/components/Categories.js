import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => (state.categoriesReducer.status));

  const check = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button className="check-btn" type="button" onClick={check}>Check status</button>
      <h2 className="status">{status}</h2>
    </div>
  );
};

export default Categories;
