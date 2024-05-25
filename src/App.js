import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header Component/Header';
import LoginForm from './LoginForm Component/LoginForm';
import RegistrationForm from './RegistrationForm Component/RegistrationForm';
import WelcomeMessage from './WelcomeMessage Component/WelcomeMessage';
import DataDisplay from './DataDisplay Component/DataDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <Header />
      <LoginForm />
      <RegistrationForm />
      <WelcomeMessage />
      {/* You need to pass data to the DataDisplay component */}
      {/* <DataDisplay data={data} /> */}
    </div>
  );
}

export default App;
