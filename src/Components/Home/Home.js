import React from 'react';
import '../Home/Home.css';
import Slideshow from '../Slideshow/Slideshow';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                    integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
                </head>
               
                <section>
                    <div className="hero-image--home">
                        <div className="container-hero">
                            <img className="avatar" src="images/David.png" alt="davidgarcia" />
                            <h1><span>David Garcia</span></h1>
                            <br />
                            <p className="hero--p"><span> I am a Junior Software Developer who has recently graduated from the Road to Hire program. I am originally from New Jersey, and I love soccer and video games. I love working on the Front-End, using HTML, CSS, and React. </span></p>
                        </div>
                    </div>
                </section>
                <Slideshow />
                <div className="button">
                <NavLink className="btn-work" exact={true} to="/Work">Check out my Work</NavLink>
                </div>
            </div>
        ) 
    };
};

export default Home;