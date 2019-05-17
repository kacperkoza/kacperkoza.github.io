import React from 'react';
import './App.css';
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
