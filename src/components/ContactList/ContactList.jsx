import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(item => {
        return <Contact key={item.id} contactItem={item} />;
      })}
    </ul>
  );
};

export default ContactList;
