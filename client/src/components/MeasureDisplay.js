import React, { Component } from "react";
import measureAPI from "../utils/measurement/measurement";

class MeasureDisplay extends Component {
  state = {
   neck: 0,
   rightarm:0,
   leftarm:0,
   chest:0,
   waist:0,
   hips:0,
   rightlegupper:0,
   rightleglower:0,
   leftlegupper:0,
   leftleglower:0,
   rightcalf:0,
   leftcalf:0,
  };
  //THhese handle our input changes for Weight, and if they change lbs to another metric.
  componentDidMount() {
    measureAPI.getMeasurement()
    .then(res => {
      console.log(res.data);
      this.setState({
        neck: res.data[0].neck,
        rightarm:res.data[0].rightarm,
        leftarm:res.data[0].leftarm,
        chest:res.data[0].chest,
        waist:res.data[0].waist,
        hips:res.data[0].hips,
        rightlegupper:res.data[0].rightlegupper,
        rightleglower:res.data[0].rightleglower,
        leftlegupper:res.data[0].leftlegupper,
        leftleglower:res.data[0].leftleglower,
        rightcalf:res.data[0].rightcalf,
        leftcalf:res.data[0].leftcalf,
        });
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
        <div className="" id="Measurements" key={this.state.neck}>
        <br/>
       <h3>Neck</h3>
       <h4 className="record-display">{this.state.neck}</h4>
       <h3>Right Arm</h3>
       <h4 className="record-display">{this.state.rightarm}</h4>
       <h3>Left Arm</h3>
       <h4 className="record-display">{this.state.leftarm}</h4>
       <h3>Chest</h3>
       <h4 className="record-display">{this.state.chest}</h4>
       <h3>Waist</h3>
       <h4 className="record-display">{this.state.waist}</h4>
       <h3>Hips</h3>
       <h4 className="record-display">{this.state.hips}</h4>
       <h3>Right Leg(Upper)</h3>
       <h4 className="record-display">{this.state.rightlegupper}</h4>
       <h3>Right Leg(Lower)</h3>
       <h4 className="record-display">{this.state.rightleglower}</h4>
       <h3>Left Leg(Upper)</h3>
       <h4 className="record-display">{this.state.leftlegupper}</h4>
       <h3>Left Leg(Lower)</h3>
       <h4 className="record-display">{this.state.leftleglower}</h4>
       <h3>Right Calf</h3>
       <h4 className="record-display">{this.state.rightcalf}</h4>
       <h3>Left Calf</h3>
       <h4 className="record-display">{this.state.leftcalf}</h4>
       <br/>
       <br/>
      </div>
    
      
    );
  }
}

export default MeasureDisplay;