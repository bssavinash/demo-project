import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuid } from 'uuid';
import ContactDetail from './ContactDetail';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts"
  const addContactHandler = (Updated) => {
    setContacts([...contacts, { id: uuid(), ...Updated }])
    console.log(Updated)
  };

  const removeContactHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id != id
    })
    setContacts(newContact)
  }
  useEffect(() => {
    const retrievdData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrievdData) setContacts(retrievdData)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <Router>
        {/* <Header /> */}
        <Routes>

          {/* <Route exact path='/' element={<App />} /> */}
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' element={<ContactDetail />} />

        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
