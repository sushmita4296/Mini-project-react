import React from "react";
import ContactCard from "./ContactCard";


const ContactList = ({contacts,getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  }
  
  const renderContact = () => {
    return contacts.map((contact) => {
return <ContactCard contact={contact} clickHandler = {deleteContactHandler}/>
    
  }) }
  


  return(
    <div className="ui celled list">
    <h1>Headline here</h1>
    {renderContact()}
    </div>
  )

}
export default ContactList;