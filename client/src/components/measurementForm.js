import React, { Component } from "react";
import measurementAPI from "../utils/measurement/API"


class MeasurementForm extends Component {

    state = {
        neck: 0,
        rightarm: 0,
        leftarm: 0,
        chest: 0,
        waist: 0,
        hips: 0,
        rightlegupper:0,
        rightleglower:0,
        leftlegupper: 0,
        leftleglower: 0,
        rightcalf: 0,
        leftcalf: 0,
        error:"",
      };
 //THhese handle our input changes for Weight, and if they change lbs to another metric.
      handleChangeNeck = (event) => {
        this.setState({
            neck: event.target.value,
           
        });
      }

      handleChangeRightArm = (event) => {
        this.setState({
            rightarm: event.target.value,
        });
      }

      handleChangeLeftArm = (event) => {
        this.setState({
            leftarm: event.target.value,
        });
      }

      handleChangeChest = (event) => {
        this.setState({
            chest: event.target.value,
        });
      }

      handleChangeWaist = (event) => {
        this.setState({
            waist: event.target.value,
        });
      }

      handleChangeHips = (event) => {
        this.setState({
            hips: event.target.value,
        });
      }

      handleChangeRightLegUp = (event) => {
        this.setState({
            rightlegupper: event.target.value,
        });
      }

      handleChangeRightLegLow = (event) => {
        this.setState({
            rightleglower: event.target.value,
        });
      }

      handleChangeLeftLegUp = (event) => {
        this.setState({
            leftlegupper: event.target.value,
        });
      }

      handleChangeLeftLegLow = (event) => {
        this.setState({
            leftleglower: event.target.value,
        });
      }

      handleChangeRightCalf = (event) => {
        this.setState({
            rightcalf: event.target.value,
        });
      }

      handleChangeLeftCalf = (event) => {
        this.setState({
            leftcalf: event.target.value,
        });
      }


    //function to handle form submit
    handleFormSubmit = event => {
        event.preventDefault();
        let savedMeasurement = {
            neck: this.state.neck,
            rightarm: this.state.rightarm,
            leftarm: this.state.leftarm,
            chest: this.state.chest,
            waist: this.state.waist,
            hips: this.state.hips,
            rightlegupper: this.state.rightlegupper,
            rightleglower: this.state.rightleglower,
            leftlegupper: this.state.leftlegupper,
            leftleglower: this.state.leftleglower,
            rightcalf: this.state.rightcalf,
            leftcalf: this.state.leftcalf,
            
        }
        measurementAPI.saveMeasurement(savedMeasurement)
        .then(console.log(savedMeasurement))
        .then(alert("You added me"))
        .catch(err => console.log(err));   
    }


  render(){
    return (
        <div className="workout-form">
            <h2>Track Your Measurements!</h2>
          <form >
            <input name= "neck" value={this.state.value} type="text" placeholder="Neck" onChange={this.handleChangeNeck} />
            <input name= "rightarm" value={this.state.value} type="text" placeholder="Right Arm" onChange={this.handleChangeRightArm} />
            <input name= "leftarm" value={this.state.value} type="text" placeholder="Left Arm" onChange={this.handleChangeLeftArm} />
            <input name= "chest" value={this.state.value} type="text" placeholder="Chest" onChange={this.handleChangeChest} />
            <input name= "waist" value={this.state.value} type="text" placeholder="Waist" onChange={this.handleChangeWaist} />
            <input name= "hips" value={this.state.value} type="text" placeholder="Hips" onChange={this.handleChangeHips} />
            <input name= "rightlegupper" value={this.state.value} type="text" placeholder="Right Upper Leg" onChange={this.handleChangeRightLegUp} />
            <input name= "rightleglower" value={this.state.value} type="text" placeholder="Right Lower Leg" onChange={this.handleChangeRightLegLow} />
            <input name= "leftlegupper" value={this.state.value} type="text" placeholder="Left Upper Leg" onChange={this.handleChangeLeftLegUp} />
            <input name= "leftleglower" value={this.state.value} type="text" placeholder="Left Lower Leg" onChange={this.handleChangeLeftLegLow} />
            <input name= "rightcalf" value={this.state.value} type="text" placeholder="Right Calf" onChange={this.handleChangeRightCalf} />
            <input name= "leftcalf" value={this.state.value} type="text" placeholder="Rigth Calf" onChange={this.handleChangeLeftCalf} />
          </form>
          <button type="submit" id="weight Submit" onClick={this.handleFormSubmit}>Add Measurements!</button>
        </div>
      )

  }

}

export default MeasurementForm;