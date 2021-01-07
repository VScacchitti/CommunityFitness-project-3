import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "Monday", items: ["1", "2", "3"] },
  { title: "Tuesday", items: ["4", "5"] },
];

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/signup"}>
          <Signup />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/plan"}>
          <DragNDrop data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
