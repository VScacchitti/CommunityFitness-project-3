import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Man from "./pages/Man";
import DragNDrop from "./components/DragNDrop";
import Workout from "./pages/Workout";
import Profile from "./pages/Profile"
import Social from "./pages/Social";
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState ({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:3001/users/tokenIsValid", 
        null, 
        { headers: { "x-auth-token": token } }
        );
        if (tokenRes.data) {
          const userRes = await Axios.get("http://localhost:3001/users/", 
          { headers: { "x-auth-token": token },
        });
        setUserData({
          token, 
          user: userRes.data,
        });
        }
    };
    
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
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
            <DragNDrop />
          </Route>
          <Route exact path={"/workout"}>
            <Workout />
          </Route>
          <Route exact path={"/man"}>
            <Man />
          </Route>
          <Route exact path={"/social"}>
            <Social />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
