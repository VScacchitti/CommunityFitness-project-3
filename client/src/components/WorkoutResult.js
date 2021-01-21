import React from "react";
import  Container from "../components/Container";
import CommentBox from "../components/CommentBox"


const WorkoutResult = props => {
  return (
    <div className="social-container">
      <div className="social-title">
        <h3>Workouts</h3>
      </div>
      
      <br/>
      {props.savedWorkouts.map(savedworkout => {
        return (
          <div className="workout" id={savedworkout.name} key={savedworkout._id}>
           <h3>{savedworkout.day}</h3>
           <h4 id="workout-name">{savedworkout.name}</h4>
           <h4>{savedworkout.description}</h4>
           <br/>
           <br/>
           <CommentBox />
          </div>
        );
      })
      }
    </div>
  )
}

export default WorkoutResult;