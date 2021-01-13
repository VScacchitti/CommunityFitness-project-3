import React, { Component } from "react";
import workoutAPI from "../utils/workout/API"


class WorkoutForm extends Component {

    state = {
        name: "",
        description:"",
        notes: "",
        error: "",
      };
 //THhese handle our input changes
      handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
      }

      handleChangeDescriptiom = (event) => {
        this.setState({
            description: event.target.value
        });
      }

      handleChangeNotes = (event) => {
        this.setState({
           
            notes: event.target.value
        });
      }

  
    //function to handle form submit
    handleFormSubmit = event => {
        event.preventDefault();
        let savedWorkout = {
            name: this.state.name,
            description: this.state.description,
            notes: this.state.notes,
        }
        workoutAPI.saveWorkout(savedWorkout)
        .then(console.log(savedWorkout))
        .then(alert("You added the following workout:" + savedWorkout.name))
        .catch(err => console.log(err));   
    }


  render(){
    return (
        <div className="signup-form">
            <h2>Create a Workout</h2>
          <form >
            <input value={this.state.value} type="text" placeholder="Name" onChange={this.handleChangeName} />
            <textarea value={this.state.value} type="input" placeholder="Workout Description" onChange={this.handleChangeDescriptiom} />
            <textarea value={this.state.value} type="input" placeholder="Workout Notes" onChange={this.handleChangeNotes} />
          </form>
          <button type="submit" id="workoutSubmit" onClick={this.handleFormSubmit}>Add Your Workout!</button>
        </div>
      )

  }

}

export default WorkoutForm;