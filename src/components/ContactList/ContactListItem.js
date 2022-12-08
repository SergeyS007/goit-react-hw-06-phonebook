import css from 'components/ContactList/ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ContactListItem = contact => {
  const { id, name, number } = contact.contact;
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactsItem} key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.string.isRequired,
};
