import { useDispatch, useSelector } from 'react-redux';
import css from '../ContactForm/ContactForm.module.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const { name, number } = contacts;
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    let nameInContacts = contacts.find(contact => contact.name === name);

    if (nameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          value={name}
          className={css.form_input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          value={number}
          className={css.form_input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.form_button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
