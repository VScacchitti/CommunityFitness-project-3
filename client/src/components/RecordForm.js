import React, { Component } from "react";
import recordAPI from "../utils/record/API";

class RecordForm extends Component {
  state = {
    name: 0,
    weight: "",
    reps: 0,
    error: "",
  };
  //THhese handle our input changes for Record etc.
  handleChangeLiftNameInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeWeightInput = (event) => {
    this.setState({
      weight: event.target.value,
    });
  };

  handleChangeRepsInput = (event) => {
    this.setState({
      reps: event.target.value,
    });
  };

  //function to handle form submit and Posts to DATABASE
  handleFormSubmit = (event) => {
    event.preventDefault();
    let savedRecord = {
      name: this.state.name,
      weight: this.state.weight,
      reps: this.state.reps,
    };
    recordAPI
      .saveRecord(savedRecord)
      .then(console.log(savedRecord))
      .then(alert("You added a weight"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="pr-form">
        <h3>Add a Personal Record</h3>
        <form>
          <input
            value={this.state.value}
            type="text"
            placeholder="Lift Name"
            onChange={this.handleChangeLiftNameInput}
          />
          <input
            value={this.state.value}
            type="text"
            placeholder="Weight"
            onChange={this.handleChangeWeightInput}
          />
          <input
            value={this.state.value}
            type="text"
            placeholder="Reps"
            onChange={this.handleChangeRepsInput}
          />
        </form>
        <button type="submit" id="reocrdSubmit" onClick={this.handleFormSubmit}>
          Add PR!
        </button>
      </div>
    );
  }
}

export default RecordForm;
