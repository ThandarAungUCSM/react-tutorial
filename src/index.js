import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => <h1>Hello!</h1>
function App() {
    const firstName = "Thandar"
    const secondName = "Aung"

    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if (hours < 12) {
        timeofDay = "Morning"
    } else if (hours >= 12 && hours <17) {
        timeofDay = "afternoon"
    } else {
        timeofDay = "Night"
    }

    return (
        <div>
            {/* <h1>Hello {firstName + " " + secondName }!</h1> */}
            <h1>Hello { `${firstName} ${secondName}`}!</h1>

            <h1>It is currently about { hours % 12} o'clock! </h1>
            <h1>Good { timeofDay }</h1>
        </div>
    )
}

// JSX
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);