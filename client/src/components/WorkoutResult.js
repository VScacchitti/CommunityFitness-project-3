import React from "react";
import  Container from "../components/Container";

const WorkoutResult = props => {
  return (
    <Container>
      <h3>Workouts</h3>
      <br/>
      {props.savedWorkouts.map(savedworkout => {
        return (
          <div id={savedworkout.name} key={savedworkout._id}>
           <h3>{savedworkout.day}</h3>
           <h4>{savedworkout.name}</h4>
           <h4>{savedworkout.description}</h4>
           <br/>
           <br/>
          </div>
        );
      })
      }
    </Container>
  )
}

export default WorkoutResult;