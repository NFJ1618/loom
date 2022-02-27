import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "../styles/SignupForm.css"
import { useNavigate } from "react-router-dom";
var axios = require('axios');


const SignupForm = () => {
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
        axios.post('http://localhost:5000/users/addUser', {
            username: userInput.username,
            password: userInput.password
        })
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                alert("Signed up!")
            }
        })
    }

    return (
        <div className = "SignupForm">
            <div className="topnav" id="myTopnav">
                <Link to="/home">Home</Link>
                <Link to="/groups">Groups</Link>
                <Link to="/login" className="log">Log in</Link>
            </div>
            <h3>Sign up</h3>
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
             <button type="submit" className="signupButton">Sign up</button>
            </form>
        </div>
    )
}

export default SignupForm