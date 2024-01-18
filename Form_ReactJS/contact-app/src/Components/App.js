
import React from 'react';
import './App.css';
// import { uuid } from "uuidv4";
import Header from './Header';
import AddContact from './AddContact';
//import ContactCard from './ContactCard';
import ContactList from './ContactList';
import { useState,useEffect } from 'react';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContact] = useState([])
    
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContact([...contacts, contact]);
  }

  useEffect(()=>{
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivecontacts){ 
      setContact(retrivecontacts);
    };
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])


  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
       {/* <ContactCard/>  */}
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
