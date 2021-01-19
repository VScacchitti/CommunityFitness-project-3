import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);

    const history =  useHistory();

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
        <nav> 
        {userData.user ? (
            <button>Logout</button> 
        ) : (
            <>
                <button onClick={signup}>Sign Up</button>
                <button onClick={login}>Log In</button>
            </>
        )}    
        </nav>
    );
}