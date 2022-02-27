import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "../styles/LoginForm.css"
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
        <div className = "LoginForm">
            <div className="topnav" id="myTopnav">
                <Link to="/home">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/groups">Groups</Link>
            </div>
            <div className="header-word">Sign Up</div>
            <div>
            <form className="my-form" onSubmit={e => handleSubmit(e)}>
                <div className="input-field" style={{margin: "0px"}}>
                    <div>Username: </div>
                    <input 
                        type="text"
                        name="username"
                        value={userInput.username}
                        onChange={e => setUserInput({...userInput, username: e.target.value})}
                        required
                    />
                </div>
                <div className="input-field">
                    <div>Password: </div>
                    <input 
                        type="password"
                        name="password"
                        value={userInput.password}
                        onChange={e => setUserInput({...userInput, password: e.target.value})}
                        required
                    />
                </div>
            <p></p>
             <button type="submit" className="loginButton">Sign Up</button>
            </form>
        </div> 
    </div>
    )
}

export default SignupForm