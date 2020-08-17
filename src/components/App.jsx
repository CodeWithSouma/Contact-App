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
      {contacts.map(createCard)}
        {/* <Card
        name ={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name ={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name ={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
