import React from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
// import ContactCard from './ContactCard';
import AddContact from './AddContact';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Bushum",
      mail: "Nawar@gmail.com"
    },
    {
      id: "2",
      name: "Asma",
      mail: "Asma@gmail.com"
    }
  ]

  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

