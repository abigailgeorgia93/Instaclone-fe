
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LandingPage from './pages/landingpage/LandingPage';
import ImagesPage from './pages/imagespage/ImagesPage';

import './App.css';

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
