import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import LandingPage from './pages/landingpage/LandingPage';
import ImagesPage from './pages/imagespage/ImagesPage';

import './App.css';
import React from 'react';

function App() { 
  const [images, setImages] = useState(false);
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/images" element={<ImagesPage images={images} setImages={setImages}/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;