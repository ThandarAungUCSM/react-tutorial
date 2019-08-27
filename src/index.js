import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
    return (
        <div>
            <h1>TDA - UCSM</h1>
            <p> This is a paragraph about me...</p>
            <ul>
                <li>Thailand</li>
                <li>Japan</li>
                <li>Singapore</li>
            </ul>
        </div>
    )
}

// JSX
ReactDOM.render(
    <MyApp />, 
    document.getElementById('root')
);