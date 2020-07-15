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
                        <p>Software Developer</p>
                    </div>
                </div>
                <div className="home">
                    <p className="bio--p"> I'm an innovative solutions seeker who works in the tech industry. 
                    Recently I completed a 6 month, 5 days a week program at Road to Hire where I learned the ins 
                    and outs of being a Software Developer. I was trained in using HTML/CSS, JavaScript, Node and more.</p> 
                    <br />
                    <p>During my time at Road to Hire, I developed a passion for Front End Design, especially using React. When I am not solving problems with code I like to spend time with my friends playing soccer or immerse myself 
                    in more digital media like video games or YouTube.</p> 
                    <br />
                    <p>Through my past experiences, I have learned how to be a leader, as well as being responsible 
                    for myself and others. Thanks to all of this, I am prepared to be a successful Software Developer </p>
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