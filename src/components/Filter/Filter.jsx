import s from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contscts-actions';
//---------------------------------------------------------------//
const Filter = () => {
  const filter = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        onChange={e => dispatch(filterUser(e.target.value))}
        value={filter}
        className="input"
      />
    </label>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handlerFilter: PropTypes.func.isRequired,
// };

export { Filter };
