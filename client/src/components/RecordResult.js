import React from "react";
import  Container from "../components/Container";



const RecordResult = props => {
  return (
    <Container>
      {props.savedRecords.map(savedrecord => {
        return (
          <div className="" id={savedrecord.name} key={savedrecord._id}>
            <br/>
           <h3 className="record-display">{savedrecord.name}</h3>
           <h4 className="record-display">{savedrecord.reps}</h4>
           <h4 className="record-display">{savedrecord.weight}</h4>
           <br/>
           <br/>
          </div>
        );
      })
      }
    </Container>
  )
}

export default RecordResult;