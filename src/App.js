import React from 'react';

import ContactCard from './components/ContactCard'

function App() {
  return (
    <div className="contacks">
      <ContactCard 
        contact = {{ name: "Mr. Whiskerson",
                     imgUrl: "http://placekitten.com/360/200",
                     phone: "(212) 555-1234",
                     email: "mr.whiskaz@catnap.meow" }}
      />

      <ContactCard 
        contact = {{ name: "Mr. Whiskerson",
                     imgUrl: "http://placekitten.com/360/200",
                     phone: "(212) 555-1234",
                     email: "mr.whiskaz@catnap.meow" }}
      />

      <ContactCard 
        contact = {{ name: "Mr. Whiskerson",
                     imgUrl: "http://placekitten.com/360/200",
                     phone: "(212) 555-1234",
                     email: "mr.whiskaz@catnap.meow" }}
      />

      <ContactCard 
        contact = {{ name: "Mr. Whiskerson",
                     imgUrl: "http://placekitten.com/360/200",
                     phone: "(212) 555-1234",
                     email: "mr.whiskaz@catnap.meow" }}
      />

    </div>
  );
}

export default App;
