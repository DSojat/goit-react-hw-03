import { useState, useEffect } from 'react';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contactsValue, setContactsValue] = useState(contactsArray);

  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const addContact = newContact => {
    setContactsValue(contactsValue => {
      return [...contactsValue, newContact];
    });
  };

  const deleteContact = contactId => {
    setContactsValue(contactsValue => {
      return contactsValue.filter(contact => contact.id != contactId);
    });
  };

  useEffect(() => {
    const pattern = inputValue.toLowerCase().trim();
    const filteredValue = contactsArray.filter(({ name }) =>
      name.toLowerCase().includes(pattern)
    );
    setContactsValue(filteredValue);
  }, [inputValue]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={contactsValue} onDelete={deleteContact} />
    </div>
  );
}

export default App;
