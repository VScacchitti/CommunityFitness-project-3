import React, { Component } from "react";
import recordAPI from "../utils/record/API";
import RecordResult from "./RecordResult"


class RecordDisplay extends Component {
  state = {
    savedRecords:[]
  };
  //THhese handle our input changes for Weight, and if they change lbs to another metric.
  componentDidMount() {
    recordAPI.getRecord()
    .then(res => {
      console.log(res.data);
      this.setState({savedRecords: res.data});
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
   
        <div className="record-display">
        <RecordResult savedRecords={this.state.savedRecords}/>
        </div>
    
      
    );
  }
}

export default RecordDisplay;