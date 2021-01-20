import React, { Component } from "react";
// import Container from "../components/Container";
import RecordForm from "../components/RecordForm";
import WeightForm from "../components/WeightForm";
import WeightDisplay from "../components/WeightDisplay";
import RecordDisplay from "../components/RecordDisplay";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-forms">
          <WeightForm />
          <RecordForm />
        </div>
        <div className="profile-displays">
          <WeightDisplay />
          
          <h3>Personal Records</h3>
          <RecordDisplay />
        </div>
      </div>
    );
  }
}

export default Profile;
