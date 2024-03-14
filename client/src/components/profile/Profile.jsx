import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <header>
        <h1>My Profile</h1>
      </header>
      <main>
        <div className="profile-info">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Profile Picture"
            className="profile-picture"
          />
          <div className="profile-details">
            <h5 className="profile-name">John Doe</h5>
            <p className="username">
              <strong>Username: </strong>jdoe
            </p>
            <p className="profile-email">
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p className="most-used-ingredient">
              <strong>Most Used Ingredient:</strong> Eggs
            </p>
            <p className="favorite-recipe">
              <strong>Favorite Recipe:</strong> Fried rice
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
