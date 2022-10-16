import React from 'react';
import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuestionsForm from './pages/Home/questionsForm';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions-form" element={<QuestionsForm />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
