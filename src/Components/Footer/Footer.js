import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
                </head>
                <footer id="main-footer">
                <ul class="footerpages">
                    <li><NavLink exact={true} to="/">Home</NavLink></li>
                    <li><NavLink exact={true} to="/Work">Work</NavLink></li>
                    <li><NavLink exact={true} to="/Resume">Resume</NavLink></li>
                    <li><NavLink exact={true} to="/Contact">Contact</NavLink></li>
                </ul>
                <div class="social">
                    <a class="social-icon" href="https://www.facebook.com/">
                        <i class="fab fa-github"></i></a>
                    <a class="social-icon divider" href="https://www.twitter.com/">
                        <i class="fab fa-twitter"></i></a>
                    <a class="social-icon" href="https://www.linkedin.com/">
                        <i class="fab fa-linkedin-in"></i></a>
                </div>
                    <p>Garcia &copy; 2020, All Rights Reserved</p>
                </footer>
            </div>
        )
    }
}

export default Footer;