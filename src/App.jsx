

import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LandingPage from './pages/landingpage/LandingPage';
import ImagesPage from './pages/imagespage/ImagesPage';

import './App.css';

import './App.css'
import React, { Component } from 'react';
import Header from './components/header/Header';


function App() {

  return (

<>
<div>
    <Layout>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/images" element={<ImagesPage />} />     
      </Routes>
    </Layout>
</div>
</>
  )
}

export default App;

    <>
    <div className="App">
      <Header />
      {Component}
    </div>
    </>
  )
}


export default App;



