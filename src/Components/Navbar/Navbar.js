import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
    return (
        <div>
            <head>
            </head>
        <header>
        <nav id="navbar">
            <div className="container-nav">
                <h1><NavLink exact={true} to="/"><img src="./images/Rose.png" alt="flowerwall"></img></NavLink></h1>
                <ul class="ul--navLinks">
                    <li className="home-btn">
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
    // const hamburgerIcon = document.querySelector(".hamburger--container");
    // const navBar = document.querySelector(".navbar");

    // hamburgerIcon.addEventListener('click', () => {
    // navBar.classList.toggle("change")
// })


export default Navbar;