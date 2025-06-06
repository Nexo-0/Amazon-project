import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx"
import Navbar from './components/Navbar.jsx';
import ProductDetails from './components/ProductDetails.jsx';
function App(props) {
  return (
    <div>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/product_details/:id' element={<ProductDetails/>}></Route>

        </Routes>
      </Router>


    </div>
  );
}

export default App;
