import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LandingPage from './pages/landingpage/LandingPage';
import ImagesPage from './pages/imagespage/ImagesPage';

import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/images" element={<ImagesPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
