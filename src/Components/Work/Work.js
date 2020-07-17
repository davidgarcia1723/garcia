import React from 'react';
import './Work.css';
import Card from '../Card/Card';
import data from './Card.json';

class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "site",
        }


    }

    render() {
        const { type } = this.state;
        
        return (
            <div>
                <div class="hero-image--work">
                    <div class="hero-text--work">
                        <h1>Work</h1>
                        <p>Some of the projects I have worked on.</p>
                        <br />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="card-container">
                    {data.map( (Website) => {
                        if ( type === "site" ) {
                            return <Card website={Website}  />
                        } else {
                            return "false"
                        }
                    })}
                </div>
                <div className="card-container">
                <div className="card">
                        <article>
                        <a href="https://github.com/davidgarcia1723/counter"><img src="/images/Counter.png" alt="counter" /></a>
                        <h1>Node Weather App</h1>
                        <p>Simple Counter app created using React lifecycles.</p>
                        <div className="btn">
                        <a href="https://counter-garcia.netlify.app/">Site</a>
                        <a href="https://github.com/davidgarcia1723/counter">Github</a>
                    </div>
                    </article>
                </div>
                    <div className="card">
                        <article>
                        <a href="https://github.com/davidgarcia1723/weather-app"><img src="/images/Weather-app.png" alt="weatherapp" /></a>
                        <h1>Node Weather App</h1>
                        <p>Weather app created using Node.js and Express</p>
                        <div className="btn">
                        <a href="https://github.com/davidgarcia1723/weather-app">Github</a>
                    </div>
                    </article>
                </div>
                <div className="card">
                        <article>
                        <a href="https://github.com/davidgarcia1723/Pokemon"><img src="/images/Pokemon.jpg" alt="pokemonapp" /></a>
                        <h1>Node Weather App</h1>
                        <p>Pokemon inspired program created with Node and Inquirer.</p>
                        <div className="btn">
                        <a href="https://github.com/davidgarcia1723/Pokemon">Github</a>
                    </div>
                    </article>
                </div>
        
                </div>
            </div>
        )
        }
    }
export default Work;