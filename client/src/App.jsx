import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/storage/Storage";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";
import Storage from "./components/storage/Storage"
import GroceryStore from "./components/grocerystore/GroceryStore"
import Profile from "./components/profile/Profile"
import CookingHist from "./components/cookinghist/CookingHist";
import ShoppingHist from "./components/shoppinghist/ShoppingHist"
import Household from "./components/household/Household"
import CreateHousehold from "./components/household/NewHousehold";
import SpecificRecipe from "./components/home/SpecificRecipe";
import CreateRecipe from "./components/home/CreateRecipe";
import SpecificStore from "./components/grocerystore/SpecificStore";
import SpecificOrder from "./components/shoppinghist/SpecificOrder";

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
        <Route path="/grocerystore" element={<GroceryStore />} />
        <Route path="/specificstore" element={<SpecificStore />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/shoppinghist" element={<ShoppingHist />} />
        <Route path="/specificorder" element={<SpecificOrder />} />
        <Route path="/cookinghist" element={<CookingHist />} />
        <Route path="/household" element={<Household />} />
        <Route path="/createhousehold" element={<CreateHousehold />} />
        <Route path="/specificrecipe" element={<SpecificRecipe />} /> 
        <Route path="/createrecipe" element={<CreateRecipe />} /> 

        {/* occurs when user logs in, otherwise, cannot see pages below */}
        
        {/* 
        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/about" element={<About />} />
        <PrivateRoute path="/storage" element={<Storage />} />
        <PrivateRoute path="/grocery" element={<Grocery />} />
        <PrivateRoute path="/profile" element={<Profile />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;