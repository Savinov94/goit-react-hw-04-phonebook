import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    const { name } = data;

    if (isContactNameExists(name)) {
      alert('This name is already in the contacts!');
      return;
    }

    setContacts((prevContacts) => [...prevContacts, data]);
  };

  const isContactNameExists = (name) => {
    return contacts.some((contact) =>
      contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    if (!filter.trim()) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((el) => el.id !== id)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;