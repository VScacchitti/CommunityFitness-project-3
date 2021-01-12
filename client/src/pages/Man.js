import React, {useState} from 'react'
// import Container from "../components/Container"
import Arms from "../Muscle/Images/Muscle Front/Arms.jpg"
// import Chest from "../Muscle/Images/Muscle Front/Chest.jpg"
// import Core from "../Muscle/Images/Muscle Front/Core.jpg"
// import Legs from "../Muscle/Images/Muscle Front/Legs.jpg"
// import Shoulders from "../Muscle/Images/Muscle Front/Shoulders.jpg"
import MuscleMan from "../Muscle/Images/Muscle Front/MuscleManBW.jpg"
// import Calf from "../Muscle/Images/Muscle Back/CalfMuscles.jpg"
// import Deltoid from "../Muscle/Images/Muscle Back/Deltoid.jpg"
// import GluteusMax from "../Muscle/Images/Muscle Back/GluteusMax.jpg"
// import GluteusMed from "../Muscle/Images/Muscle Back/GluteusMed.jpg"
// import Hamstrings from "../Muscle/Images/Muscle Back/Hamstrings.jpg"
// import Latissimus from "../Muscle/Images/Muscle Back/Latissimus.jpg"
// import TeresMajor from "../Muscle/Images/Muscle Back/TeresMajor.jpg"
// import Trapezius from "../Muscle/Images/Muscle Back/Trapezius.jpg"
// import Triceps from "../Muscle/Images/Muscle Back/Triceps.jpg"
// import MusclemanBack from "../Muscle/Images/Muscle Back/MuscleManBACKBW.jpg"

function Home() {
  const [hidden, setHidden] = useState(true);

  const handleArms = () => {
    setHidden(!hidden);
  };

  const hide = {
    display: "none"
  };
  const show = {
    display: "flex"
  };

  return (
    <div className="container-man">
      <div className="muscle-box">
        <div className="man-front">
          <img src={MuscleMan} />
          <div className="man-f-inner" style={hidden?hide:show}>
            <img src={Arms} />
          </div>
        </div>
      </div>
      <div className="muscle-options">
        <ul>
          <li id="arms" onMouseOver={handleArms} onMouseLeave={handleArms}>Arms</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
