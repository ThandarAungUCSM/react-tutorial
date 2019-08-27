import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => <h1>Hello!</h1>
function App() {
    const firstName = "Thandar"
    const secondName = "Aung"

    const date = new Date(2018, 6, 31, 17)
    const hours = date.getHours()
    let timeofDay
    const styles = {
        // color: "#FF8C00",
        // background: '#FF2D00',
        fontSize: 30
    }

    if (hours < 12) {
        timeofDay = "Morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours <17) {
        timeofDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeofDay = "Night"
        styles.color = "#D90000"
    }
    
    return (
        <div>
            {/* <h1>Hello {firstName + " " + secondName }!</h1> */}
            <h1>Hello { `${firstName} ${secondName}`}!</h1>

            <h1>It is currently about { hours % 12} o'clock! </h1>
            <h1 style={styles}>Good { timeofDay }</h1>
        </div>
    )
}

// JSX
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);