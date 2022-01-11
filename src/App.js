import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';

const App = () =>
{
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element="Hello" />
        <Route path="/add" element="Add component" />
        <Route path="/edit" element="Edit Component" />
      </Routes>
    </div>
  );
}

export default App;
