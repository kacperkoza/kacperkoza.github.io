import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './register/register.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
    console.log('render app');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <MuiThemeProvider>
                    <Register/>
                </MuiThemeProvider>
            </header>
        </div>
    );
}

export default App;
