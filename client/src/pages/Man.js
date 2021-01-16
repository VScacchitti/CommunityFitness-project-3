import React, { useState } from "react";
// import Container from "../components/Container"
import API from "../utils/exercise/API";
import Arms from "../Muscle/Images/Muscle Front/Arms.jpg";
import Chest from "../Muscle/Images/Muscle Front/Chest.jpg";
import Core from "../Muscle/Images/Muscle Front/Core.jpg";
import Shoulders from "../Muscle/Images/Muscle Front/Shoulders.jpg";
import MuscleMan from "../Muscle/Images/Muscle Front/MuscleManBW.jpg";
import Legs from "../Muscle/Images/Muscle Front/Legs.jpg";
import Calf from "../Muscle/Images/Muscle Back/CalfMuscles.jpg";
import Deltoid from "../Muscle/Images/Muscle Back/Deltoid.jpg";
import GluteusMax from "../Muscle/Images/Muscle Back/GluteusMax.jpg";
import GluteusMed from "../Muscle/Images/Muscle Back/GluteusMed.jpg";
import Hamstrings from "../Muscle/Images/Muscle Back/Hamstrings.jpg";
import Latissimus from "../Muscle/Images/Muscle Back/Latissimus.jpg";
import TeresMajor from "../Muscle/Images/Muscle Back/TeresMajor.jpg";
import Trapezius from "../Muscle/Images/Muscle Back/Trapezius.jpg";
import Triceps from "../Muscle/Images/Muscle Back/Triceps.jpg";
import MusclemanBack from "../Muscle/Images/Muscle Back/MuscleManBACKBW.jpg";

function Home() {
  const [body, setBody] = useState([]);
  const [arms, setArms] = useState(false);
  const [chest, setChest] = useState(false);
  const [core, setCore] = useState(false);
  const [shoulders, setShoulders] = useState(false);
  const [legs, setLegs] = useState(false);
  const [calf, setCalf] = useState(false);
  const [deltoid, setDeltoid] = useState(false);
  const [gluteusmax, setGluteusmax] = useState(false);
  const [gluteusmed, setGluteusmed] = useState(false);
  const [hamstrings, setHamstrings] = useState(false);
  const [latissimus, setLatissimus] = useState(false);
  const [teresmajor, setTeresmajor] = useState(false);
  const [trapezius, setTrapezius] = useState(false);
  const [triceps, setTriceps] = useState(false);

  const hide = {
    display: "none",
    zIndex: -1,
  };
  const show = {
    display: "flex",
    zIndex: 10,
  };

  const handleArms = () => {
    setArms(!arms);
  };
  const handleChest = () => {
    setChest(!chest);
  };
  const handleCore = () => {
    setCore(!core);
  };
  const handleShoulders = () => {
    setShoulders(!shoulders);
  };
  const handleLegs = () => {
    setLegs(!legs);
  };
  const handleCalf = () => {
    setCalf(!calf);
  };
  const handleDeltoid = () => {
    setDeltoid(!deltoid);
  };
  const handleGluteusMax = () => {
    setGluteusmax(!gluteusmax);
  };
  const handleGluteusMed = () => {
    setGluteusmed(!gluteusmed);
  };
  const handleHamstrings = () => {
    setHamstrings(!hamstrings);
  };
  const handleLatissimus = () => {
    setLatissimus(!latissimus);
  };
  const handleTeresMajor = () => {
    setTeresmajor(!teresmajor);
  };
  const handleTrapezius = () => {
    setTrapezius(!trapezius);
  };
  const handleTriceps = () => {
    setTriceps(!triceps);
  };

  function search(e) {
    API.getExercisebyBodypart(e.target.id)
      .then((results) => {
        console.log(results.data);
        setBody(results.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-man">
      <div className="muscle-box">
        <div className="man-front">
          <img src={MuscleMan} alt="anterior muscle groups" />
          <div className="man-f-inner">
            <img src={Arms} style={arms ? show : hide} alt="arms" />
            <img src={Chest} style={chest ? show : hide} alt="chest" />
            <img src={Core} style={core ? show : hide} alt="core" />
            <img
              src={Shoulders}
              style={shoulders ? show : hide}
              alt="shoulders"
            />
            <img src={Legs} style={legs ? show : hide} alt="legs" />
          </div>
        </div>
      </div>
      <div className="man-back">
        <img src={MusclemanBack} alt="posterior muscle groups" />
        <div className="man-b-inner">
          <img src={Calf} style={calf ? show : hide} alt="calves" />
          <img src={Deltoid} style={deltoid ? show : hide} alt="deltoids" />
          <img
            src={GluteusMax}
            style={gluteusmax ? show : hide}
            alt="gluteus maximus"
          />
          <img
            src={GluteusMed}
            style={gluteusmed ? show : hide}
            alt="gluteus medius"
          />
          <img
            src={Hamstrings}
            style={hamstrings ? show : hide}
            alt="hamstrings"
          />
          <img
            src={Latissimus}
            style={latissimus ? show : hide}
            alt="latissimus"
          />
          <img
            src={TeresMajor}
            style={teresmajor ? show : hide}
            alt="teres major"
          />
          <img
            src={Trapezius}
            style={trapezius ? show : hide}
            alt="trapezius"
          />
          <img src={Triceps} style={triceps ? show : hide} alt="triceps" />
        </div>
      </div>
      <div className="muscle-options">
        <ul>
          <li
            id="Arms" onMouseOver={handleArms} onMouseLeave={handleArms} onClick={search}>
            Arms
          </li>
          <li id="Chest" onMouseOver={handleChest} onMouseLeave={handleChest} onClick={search}>
            Chest
          </li>
          <li id="Core" onMouseOver={handleCore} onMouseLeave={handleCore} onClick={search}>
            Core
          </li>
          <li
            id="Shoulders"
            onMouseOver={handleShoulders}
            onMouseLeave={handleShoulders}
            onClick={search}
          >
            Shoulders
          </li>
          <li id="Legs" onMouseOver={handleLegs} onMouseLeave={handleLegs} onClick={search}>
            Legs
          </li>
          <li
            id="Calfmuscles"
            onMouseOver={handleCalf}
            onMouseLeave={handleCalf}
            onClick={search}
          >
            CalfMuscles
          </li>
          <li
            id="Shoulders"
            onMouseOver={handleDeltoid}
            onMouseLeave={handleDeltoid}
            onClick={search}
          >
            Deltoid
          </li>
          <li
            id="Legs"
            onMouseOver={handleGluteusMax}
            onMouseLeave={handleGluteusMax}
            onClick={search}
          >
            GluteusMax
          </li>
          <li
            id="Legs"
            onMouseOver={handleGluteusMed}
            onMouseLeave={handleGluteusMed}
            onClick={search}
          >
            GluteusMed
          </li>
          <li
            id="Legs"
            onMouseOver={handleHamstrings}
            onMouseLeave={handleHamstrings}
            onClick={search}
          >
            Hamstrings
          </li>
          <li
            id="Back"
            onMouseOver={handleLatissimus}
            onMouseLeave={handleLatissimus}
            onClick={search}
          >
            Latissimus
          </li>
          <li
            id="Back"
            onMouseOver={handleTeresMajor}
            onMouseLeave={handleTeresMajor}
            onClick={search}
          >
            TeresMajor
          </li>
          <li
            id="Back"
            onMouseOver={handleTrapezius}
            onMouseLeave={handleTrapezius}
            onClick={search}
          >
            Trapezius
          </li>
          <li
            id="Arms"
            onMouseOver={handleTriceps}
            onMouseLeave={handleTriceps}
            onClick={search}
          >
            Triceps
          </li>
        </ul>
      </div>
      <div className="search-results">
        {body.map((item) => (
          <p>{item.name}</p>
        ))}
        {/* <p>{body.name}</p> */}
      </div>
    </div>
  );
}

export default Home;
