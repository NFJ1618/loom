import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css"
import {Navbar, Nav, NavItem, NavDrop} from 'react-bootstrap';
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
const axios = require('axios').default;

function Home() {
    let loginLink;
    axios.get('http://localhost:5000/users/loggedin')
    .then(function (response) {
        console.log(response.data)
        if (response.data) {
            return (
                <Router>
                <div className="homepage">
                    <div className="topnav" id="myTopnav">
                        <Link to="/home">Home</Link>
                        <Link to="/signup">Sign up</Link>
                        <Link to="/groups">Groups</Link>
                        <Link to="/logout" className="log">Log out</Link>
                    </div>
                    <h1>Welcome</h1>
                    <p>Collaborative Storytelling App</p>
                </div>
                </Router>
            );
        }
        else {
            console.log("jhwdihiwd")
        }
    })
    return (
        <div className="homepage">
            <div className="topnav" id="myTopnav">
                <Link to="/home">Home</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/groups">Groups</Link>
                <Link to="/login" className="log">Log in</Link>
            </div>
            <h1>Welcome</h1>
            <p>Collaborative Storytelling App</p>
        </div>
    );
}

export default Home