import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';

const App = () =>
{
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element="Edit Component" />
      </Routes>
    </div>
  );
}

export default App;
