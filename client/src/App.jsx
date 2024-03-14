import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/storage/Storage";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";
import Storage from "./components/storage/Storage"
import Grocery from "./components/grocery/Grocery"
import Cart from "./components/cart/Cart"
import Payments from "./components/payments/Payments";
import Profile from "./components/profile/Profile"

function App() {
  return (
    <Router>
      
      {/* remember to comment out navbar first; then make it appear when user logs in */}
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />

        {/* occurs when user logs in, otherwise, cannot see pages below */}
        
        {/* 
        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/about" element={<About />} />
        <PrivateRoute path="/storage" element={<Storage />} />
        <PrivateRoute path="/grocery" element={<Grocery />} />
        <PrivateRoute path="/cart" element={<Cart />} /> 
        <PrivateRoute path="/payments" element={<Payments />} />
        <PrivateRoute path="/profile" element={<Profile />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;