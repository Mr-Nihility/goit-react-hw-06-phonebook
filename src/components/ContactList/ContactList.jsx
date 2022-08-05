import { ContactItem } from './ContactItem/ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contacts/contscts-actions';
//----------------------------------------------------------------//

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

export { ContactList };
