import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import UtPage from '../pages/UtPage';
import SwPage from '../pages/SwPage';
import TkPage from '../pages/TkPage';

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/utpage" element={<UtPage />} />
        <Route path="/swpage" element={<SwPage />} />
        <Route path="/tkpage" element={<TkPage />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
