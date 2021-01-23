import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";

export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);

    let history =  useHistory();

    const signup = () => history.push("/signup");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <div className="nav"> 
        {userData.user ? (
            <button onClick={logout}>Logout</button> 
        ) : (
            <div className="loginout">
                <button onClick={signup}>Sign Up</button>
                <button onClick={login}>Log In</button>
            </div>
        )}    
        </div>
    );
}