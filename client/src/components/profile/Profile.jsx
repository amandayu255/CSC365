import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import CookingHist from "../cookinghist/CookingHist";
import ShoppingHist from "../shoppinghist/ShoppingHist";
import Household from "../household/Household";

const Profile = () => {
  return (
    <div className="profile-container">
  <header>
    <h1>My Profile</h1>
  </header>
  <main>
    <Link to="/Household"><button className="house-id">House ID</button></Link>
    <div className="profile-info">
      <div className="profile-details">
        <h5 className="profile-name">John Doe</h5>
        <p className="username">
          <strong>Username: </strong>jdoe
        </p>
        <p className="profile-email">
          <strong>Email:</strong> john.doe@example.com
        </p>
        {/* <p className="favorite-recipe">
          <strong>Favorite Recipe:</strong> Fried rice
        </p> */}
        <br></br>
        <div className="buttons-container">
          <Link to="/ShoppingHist">
            <button>Shopping History</button>
          </Link>
          <Link to="/CookingHist">
            <button>Cooking History</button>
          </Link>
        </div>
      </div>
    </div>
  </main>
</div>

  );
};

export default Profile;
