
import React from "react"

function handleClick() {
  console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events
function App() {
    // const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div>
        <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" />
        <br />
        <br />
        <button onClick={handleClick}>Click Me</button>
      </div>
    )
}

export default App