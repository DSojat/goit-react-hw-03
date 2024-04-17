const Contact = ({ contacts }) => {
  return (
    <>
      {contacts.map(item => {
        <li>{item.number}</li>;
      })}
    </>
  );
};

export default Contact;
