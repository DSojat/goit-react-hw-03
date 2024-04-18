import css from './Contact.module.css';

const Contact = ({ contactItem }) => {
  const { name, number } = contactItem;
  return (
    <>
      <li className={css.contactBox}>
        <div>
          <p>&#128100; {name}</p>
          <p>&#128222; {number}</p>
        </div>
        <button type="button">Delete</button>
      </li>
    </>
  );
};

export default Contact;
