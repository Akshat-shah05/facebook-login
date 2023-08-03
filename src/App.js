import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import Facebook from './components/Facebook';

function App () {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Log in to Authenticate with Facebook!
          </p>
          <Facebook />
        </header>
      </div>
    );
}

export default App;
