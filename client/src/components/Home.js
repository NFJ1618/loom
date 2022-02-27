import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css"
import {Navbar, Nav, NavItem, NavDrop} from 'react-bootstrap';
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
    return (
        <Router>
        <div className="homepage">
            <div class="topnav" id="myTopnav">
                <Link to="/home">Home</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/groups">Groups</Link>
                <Link to="/logout" className="logout">Logout</Link>
            </div>
            <h1>Welcome</h1>
            <p>Collaborative Storytelling App</p>
        </div>
        </Router>
    )
}

export default Home