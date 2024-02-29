import './App.css';
import { React } from 'react';
import HomeSubscription from './pages/HomeSubscription';
import SuccessSubscription from './pages/SuccessSubscription';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomeSubscription />} /> 
        <Route path="/Success" element={<SuccessSubscription />} /> 
      </Routes>
    </div>
  );
};

export default App
