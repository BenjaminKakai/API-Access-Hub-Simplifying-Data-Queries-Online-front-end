import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header Component/Header';
import LoginForm from './LoginForm Component/LoginForm';
import RegistrationForm from './RegistrationForm Component/RegistrationForm';
import WelcomeMessage from './WelcomeMessage Component/WelcomeMessage';
import DataDisplay from './DataDisplay Component/DataDisplay';

function App() {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fetch_data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <LoginForm />
      <RegistrationForm />
      <WelcomeMessage />
      {/* Pass the fetched data to the DataDisplay component */}
      <DataDisplay data={data} />
    </div>
  );
}

export default App;
