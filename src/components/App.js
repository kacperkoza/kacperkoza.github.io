import React from 'react';
import './App.css';
import Register from './register/register.js'
import Router from './router/router.js'

function App() {
    console.log('render app');
    return (
        <div className="App">
            <Router/>
        </div>
    );
}

export default App;
