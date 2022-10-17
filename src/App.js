import React from 'react';
import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
