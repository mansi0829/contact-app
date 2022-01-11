import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';

const App = () =>
{
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      Hello
    </div>
  );
}

export default App;
