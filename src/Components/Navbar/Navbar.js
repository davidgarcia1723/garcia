import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
    return (
        <div>
            <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
            </head>
        <header>
        <nav id="navbar">
            <div className="container-nav">
                <h1><img src="./images/Rose.png" alt="flowerwall"></img></h1>
                <ul>
                    <li>
                        <NavLink exact={true} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Work">Work</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Resume">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
        </div>
        )   
    };
};

export default Navbar;