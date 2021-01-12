import React from 'react'
import Container from "../components/Container"
import Arms from "../Muscle/Images/Muscle Front/Arms.jpg"
import Chest from "../Muscle/Images/Muscle Front/Chest.jpg"
import Core from "../Muscle/Images/Muscle Front/Core.jpg"
import Legs from "../Muscle/Images/Muscle Front/Legs.jpg"
import Shoulders from "../Muscle/Images/Muscle Front/Shoulders.jpg"
import MuscleMan from "../Muscle/Images/Muscle Front/MuscleManBW.jpg"
import Calf from "../Muscle/Images/Muscle Back/CalfMuscles.jpg"
import Deltoid from "../Muscle/Images/Muscle Back/Deltoid.jpg"
import GluteusMax from "../Muscle/Images/Muscle Back/GluteusMax.jpg"
import GluteusMed from "../Muscle/Images/Muscle Back/GluteusMed.jpg"
import Hamstrings from "../Muscle/Images/Muscle Back/Hamstrings.jpg"
import Latissimus from "../Muscle/Images/Muscle Back/Latissimus.jpg"
import TeresMajor from "../Muscle/Images/Muscle Back/TeresMajor.jpg"
import Trapezius from "../Muscle/Images/Muscle Back/Trapezius.jpg"
import Triceps from "../Muscle/Images/Muscle Back/Triceps.jpg"
import MusclemanBack from "../Muscle/Images/Muscle Back/MuscleManBACKBW.jpg"

function Home() {
  return (
    <Container>
      <img id="main" src="../muscle" />
        <ul id="myList">
        <li>
            <span>Arms</span>
                <img src={Arms} />
        </li>
        <li>
            <span>Chest</span>
                <img src={Chest} />
        </li>
        <li>
            <span>Core</span>
                <img src={Core} />
        </li>
        <li><span>Legs</span>
                <img src={Legs} />
        </li>
        <li>
            <span>Shoulders</span>
                <img src={Shoulders} />
        </li>
        <li>
            <span>Calf</span>
                <img src={CalfMuscles} />
        </li>
        <li>
            <span>Deltoid</span>
                <img src={Deltoid} />
        </li>
        <li>
            <span>Gluteus Max</span>
                <img src={GluteusMax} />
        </li>
        <li>
            <span>Gluteus Med</span>
                <img src={GluteusMed} />
        </li>
        <li>
            <span>Hamstrings</span>
                <img src={Hamstrings} />
        </li>
        <li>
            <span>Latissimus</span>
                <img src={Latissimus} />
        </li>
        <li>
            <span>Teres Major</span>
                <img src={TeresMajor} />
        </li>
        <li>
            <span>Trapezius</span>
                <img src={Trapezius} />
        </li>
        <li>
            <span>Triceps</span>
                <img src={Triceps} />
        </li>
      </ul>
    </Container>
  )
}

export default Home
