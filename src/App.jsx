import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/Placeorder/Placeorder";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Loginpopup/Login";
 
const App =()=>{

const [showLogin,setShowLogin]=useState(false)

  return(
    <>
    {showLogin ? <Login setShowLogin ={setShowLogin}/>:<></>}
     <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App;