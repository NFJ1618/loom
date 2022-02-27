import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "../styles/LoginForm.css"
import { useNavigate } from "react-router-dom";
var axios = require('axios');

const LoginForm = () => {
    const [userInput, setUserInput] = useState(
        {
            username: "",
            password: ""
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use Axios POST request later
        console.log(userInput);
        axios.post('http://localhost:5000/users/login', {
            username: userInput.username,
            password: userInput.password
        })
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                alert("Logged in!")
            }
        })
    }

    return (
        <div className = "LoginForm">
            <div className="topnav" id="myTopnav">
                <Link to="/home">Home</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/chapters">Chapters</Link>
                <Link to="/login" className="log">Log in</Link>
            </div>
            <h3>Login</h3>
            <form onSubmit={e => handleSubmit(e)}>
            <h2>Username: </h2>
            <input 
                type="text"
                name="username"
                value={userInput.username}
                onChange={e => setUserInput({...userInput, username: e.target.value})}
                required
            />
            <h2>Password: </h2>
            <input 
                type="password"
                name="password"
                value={userInput.password}
                onChange={e => setUserInput({...userInput, password: e.target.value})}
                required
            />
            <p></p>
             <button type="submit" className="loginButton">Login</button>
            </form>
        </div>
    )
}

export default LoginForm