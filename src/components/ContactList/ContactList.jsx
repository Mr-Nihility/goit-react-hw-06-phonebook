import { ContactItem } from './ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contacts/contscts-actions';
//----------------------------------------------------------------//
// const getVisableContacts = () => {
//   return contacts.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//   );
// };
const ContactList = () => {
  const items = useSelector(({ contacts }) => contacts.items);
  const filter = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();
  const contacts = items.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={id => dispatch(deleteUser(id))}
          />
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export { ContactList };
