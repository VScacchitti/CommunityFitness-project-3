import React, { Component } from "react";
import weightAPI from "../utils/weight/API";
import cogoToast from 'cogo-toast';


class WeightForm extends Component {

    state = {
        weight: 0,
        units:"lbs",
        error: "",
      };
 //THhese handle our input changes for Weight, and if they change lbs to another metric.
      handleChangeWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
      }

      handleChangeUnit = (event) => {
        this.setState({
            units: event.target.value
        });
      }

    //function to handle form submit
    handleFormSubmit = event => {
        event.preventDefault();
        let savedWeight = {
            weight: this.state.weight,
            units: this.state.units,
            
        }
        weightAPI.saveWeight(savedWeight)
        .then(console.log(savedWeight))
        .then(cogoToast.success("You added a weight"))
        .catch(err => console.log(err));   
    }


  render(){
    return (
        <div className="weight-form">
            <h3>Add or Update Weight!</h3>
          <form >
            <input value={this.state.value} type="text" placeholder="Weight" onChange={this.handleChangeWeight} />
            <input value={this.state.value} type="text" placeholder="lbs" onChange={this.handleChangeUnit} />
          </form>
          <button type="submit" id="weight Submit" onClick={this.handleFormSubmit}>Add Weight!</button>
        </div>
      )

  }

}

export default WeightForm;