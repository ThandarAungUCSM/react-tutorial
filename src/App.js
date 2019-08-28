import React from 'react';

import Joke from './components/Joke'
import jokesData from './JokesData'
function App() {
  const jokeComponents = jokesData.map( joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  // const nums = [1,2,3,4,5,6,7,8,9,10]
  // const doubled = nums.map(function(num) {
  //   return num * 2
  // })
  // console.log(doubled)

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default App;
