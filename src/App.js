import React from 'react';
import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Goals from './pages/Goals';
import Recommendations from './pages/Recommendations';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions-form/:id" element={<Questions />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/recommendations/:goalId" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
