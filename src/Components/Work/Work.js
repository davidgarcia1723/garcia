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
            </div>
        )
        }
    }
export default Work;