import React from 'react';
import '../Home/Home.css';
import Slideshow from '../Slideshow/Slideshow';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="hero-image">
                    <div class="hero-text">
                        <img src="/images/David.png" alt="david" />
                        <h1>I am David Garcia</h1>
                        <p>Junior Software Developer</p>
                    </div>
                </div>
                <div className="home">
                    <p className="bio--p"> I am a Junior Software Developer who has recently graduated from the Road to Hire program. I am originally from New Jersey, and I love soccer and video games. I love working on the Front-End, using HTML, CSS, and React.</p>
                </div>
                <Slideshow />
                <div className="button">
                <NavLink className="btn-work" exact={true} to="/Work">Check out my Work</NavLink>
                </div>
            </div>
        ) 
    };
};

export default Home;