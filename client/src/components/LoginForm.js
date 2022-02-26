import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/LoginForm.css"

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
    }

    return (
        <div className = "LoginForm">
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
             <button type="submit" className="loginButton">Login</button>
            </form>
        </div>
    )
}

export default LoginForm