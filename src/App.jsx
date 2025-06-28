import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </>
  );
}

export default App;
