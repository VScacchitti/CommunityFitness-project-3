import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/signup"} component={Signup} />
      <Route exact path={"/login"} component={Login} />
    </Router>
  );
}

export default App;
