import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MealDetail from './components/MealDetail';
import CateDetail from './components/CateDetail';
import CateWise from './components/CateWise';
import SearchData from './components/SearchData';
import Footer from './components/Footer';
function App() {
  const [data, setData] = useState('all');

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mealDetail/:id" element={<MealDetail />} />
          <Route path="/cateDetail/:id" element={<CateDetail />} />
          <Route path="/categroyWise/:cate" element={<CateWise />} />
          <Route path="/searched/:item" element={<SearchData />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
