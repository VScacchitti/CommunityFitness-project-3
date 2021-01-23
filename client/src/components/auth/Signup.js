import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import Axios from "axios";
import ErrorNotice from "../ErrorNotice";

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [name, setName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    let history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
        const newUser = { email, password, passwordCheck, name };
        await Axios.post(
            "/api/user/register",
            newUser
        );
        const loginRes = await Axios.post("api/user/login", {
        email,
        password,
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
    }
    catch(err) {
        err.response.data.msg && setError(err.response.data.msg);
    }
};

    return (
        <div>
            <h2>Signup</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <form onSubmit={submit}>
                <label htmlFor="signup-email">Email</label>
                <input id="signup-email" 
                type="email" 
                onChange={e => setEmail(e.target.value)} 
                />

                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" 
                type="password" 
                onChange={e => setPassword(e.target.value)}     
                />

                <input 
                type="password" 
                placeholder="Verify password" 
                onChange={e => setPasswordCheck(e.target.value)}     
                />

                <label htmlFor="signup-name">Name</label>
                <input id="signup-name" 
                type="text"
                onChange={e => setName(e.target.value)} 
                />

                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

