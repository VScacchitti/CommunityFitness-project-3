import React, { Component } from "react";
import Container from "./Container";
import weightAPI from "../utils/weight/API"



class WeightDisplay extends Component {

    state = {
        weight: 0,
        units:"lbs",
        error: "",
      };
 //THhese handle our input changes for Weight, and if they change lbs to another metric.
     componentDidMount(){
      weightAPI.getWeight()
      .then(res => {
        console.log(res.data[0].weight)
        this.setState({weight:res.data[0].weight})
      })
     }

  render(){
    return (
        <Container>
        <div className="weight-form">
            <h2>Current Weight</h2>
            <h3>{this.state.weight}</h3>
        </div>
        </Container>
        
    )
}
}

export default WeightDisplay;



