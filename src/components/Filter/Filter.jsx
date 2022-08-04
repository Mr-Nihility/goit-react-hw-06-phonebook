import s from './Filter.module.css';
import PropTypes from 'prop-types';
//---------------------------------------------------------------//
const Filter = ({ filter, handlerFilter }) => {
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        onChange={handlerFilter}
        value={filter}
        className="input"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};

export { Filter };
