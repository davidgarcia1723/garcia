import React from 'react';
import './Resume.css';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <h1 className="name">David Garcia</h1>
                <h2 className="title">Software Developer</h2>
                <br />
                <h2 className="topic">Objective</h2>
                <p className="text">I am an experienced individual with skills in management and training others. My passion is learning new material and methods and teaching what I know to others.</p>
                <br />
                <h2 className="topic">Education</h2>
                <ul className="text">
                    <li><b>Zebulon B. Vance High School</b> - Charlotte, NC -  August 2010 to June 2014</li>
                    <br />
                    <li><b>Road To Hire Coding Fellowship</b> - Fort Mill, SC - February 2020 to July 2020</li>
                </ul>
                <br />
                <h2 className="topic">Languages / Frameworks / Libraries</h2>
                <ul className="text">
                    <li>HTML/CSS</li>
                    <br />
                    <li>JavaScript</li>
                    <br />
                    <li>React</li>
                    <br />
                    <li>Node.js</li>
                </ul>
                <br />
                <h2 className="topic">Work Experience</h2>
                <h2 className="job">Machine Operator - Daumar Industries - 9/19-1/20</h2>
                <br />
                <p className="text">Organized and executed opening of new flexographic printing facility.</p>
                <br />
                <h2 className="job">Sales Representative - Hendrick Automotive Group - 5/19-9/19</h2>
                <br />
                <p className="text">Advised customers on deciding which product was best suited for their needs. </p>
                <br />
                <h2 className="job">Assistant General Manager - Blaze Fast Fire'd Pizza - 1/19-5/19</h2>
                <br />
                <p className="text">Recruited and mentored new team members, as well as leading day to day operations.</p>
                <br />
                <h2 className="job">Supervisor - Cava/Zoe's Kitchen - 8/17-1/19</h2>
                <br />
                <p className="text">Developed schedules for all team members, as well as leading day to day operations.</p>
                <br />
                <h2 className="job">Senior Game Advisor/Keyholder - Gamestop - 8/14-8/17</h2>
                <br />
                <p className="text">Operated day to day operations including bank deposits and keeping track of inventory.</p> 
                <br />
                <h2 className="topic">References available upon request</h2>           
                </div>
        )
        }
    }
export default Resume;