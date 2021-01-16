import React, {Component } from "react";
import Container from "../components/Container";
import RecordForm from "../components/RecordForm";
import WeightForm from "../components/WeightForm";
import WeightDisplay from "../components/WeightDisplay"

class Profile extends Component{
  render(){
      return (
          <Container>
              <RecordForm/>
              <WeightForm/>
              <WeightDisplay/>
          </Container>
      )
  }
}

export default Profile;