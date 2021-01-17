import React, { Component } from "react";
import workoutAPI from "../utils/workout/API";
import WorkoutResult from "../components/WorkoutResult"


class Social extends Component {
  state = {
    savedWorkouts: []
  };

  componentDidMount() {
    workoutAPI.getWorkout()
      .then(res => this.setState({ savedWorkouts: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <WorkoutResult savedWorkouts={this.state.savedWorkouts}  />
    )
  }
}

export default Social;
