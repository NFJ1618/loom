import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css"

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const sendData = (data) => {
        console.log(data);
    }

    return (
        <div className='Login-form'>
            <form onSubmit={handleSubmit(data => sendData(data))}>
                <input 
                    type="text"
                    className="login-username"
                    {...register("username", {required: true})} />
                <input 
                    type="password"
                    className="login-password"
                    {...register("password", {required: true})} />
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm