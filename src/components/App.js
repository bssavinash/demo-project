import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import api from '../api/contacts'
import { v4 as uuid } from 'uuid';
import ContactDetail from './ContactDetail';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts"
  const addContactHandler = async (Updated) => {
    const request = {
      id: uuid(),
      ...Updated
    }
    const response = await api.post("/contacts",request)
    setContacts(...contacts,response.data)
    // setContacts([...contacts, { id: uuid(), ...Updated }])
    console.log(Updated)
  };
   
  //Retrived Contacts
  const retrivedContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContact = contacts.filter((contact) => {
      return contact.id != id
    })
    setContacts(newContact)
  }
  useEffect(() => {
    // const retrievdData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrievdData) setContacts(retrievdData)
    const getAllContacts = async () => {
     const allContacts = await retrivedContacts()
      if(allContacts) setContacts(allContacts)
    }
    getAllContacts()
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
