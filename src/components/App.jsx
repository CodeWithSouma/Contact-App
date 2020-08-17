import React from "react";
import Card from "./Card"
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading/>
      <Card
        name ="Beyonce"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
    </div>
  );
}

export default App;
