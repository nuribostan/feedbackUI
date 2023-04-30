import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About"
import Home from './pages/Home';
import Header from './components/Header';


function App() {


  return (
    <div className='container'>
      <Header headerTitle={"Feedback UI"} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
