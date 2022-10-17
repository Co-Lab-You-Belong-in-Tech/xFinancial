import React from 'react';
import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions-form" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
