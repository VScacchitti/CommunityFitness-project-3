import React from "react";
import { useHistory } from "react-router-dom";

export default function AuthOptions() {
    const history =  useHistory();

    const signup = () => history.push("/signup");
    const login = () => history.push("/login");


    return (
        <div>
            <button onClick={signup}>Sign Up</button>
            <button onClick={login}>Log In</button>
        </div>
    );
}