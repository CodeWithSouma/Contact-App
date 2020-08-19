import React from "react";
import Card from "./Card"
import Heading from "./Heading";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
        key ={contact.id}
        name ={contact.name}
        src={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
  );
}


function App() {
  return (
    <div>
      <Heading/>
      {/*it work like forEach loop */}
      {contacts.map(createCard)} 
    </div>
  );
}

export default App;
