import React from 'react';

import Joke from './components/Joke'

function App() {
  return (
    <div className="contacks">
      <Joke
        punchLine="My new job" />
      <Joke 
        question = "What's the name" 
        punchLine="The name is Yu." />
      <Joke 
        question = "What's the city" 
        punchLine="The city is Yangon." />
    </div>
  );
}

export default App;
