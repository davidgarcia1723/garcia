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
                <p className="text">I am an innovative problem solver and eager learner, looking to further my passion for technology as a Software Developer. </p>
                <br />
                <h2 className="topic">Education</h2>
                <ul className="text">
                    <li><b>Zebulon B. Vance High School</b> - Charlotte, NC -  August 2010 to June 2014</li>
                    <br />
                    <li><b>Road To Hire Coding Fellowship</b> - Fort Mill, SC - February 2020 to July 2020</li>
                </ul>
                <br />
                <h2 className="topic">Skills</h2>
                <div className="skills">
                    <img src="Icons/HTML.png" alt="HTML" />
                    <img src="Icons/CSS.png" alt="CSS" />
                    <img src="Icons/JS.png" alt="JavaScript" />
                    <img src="Icons/Node.png" alt="Node" />
                    <img src="Icons/React.png" alt="React" />
                    <img src="Icons/MySQL.png" alt="MySQL" />
                </div>
                <br />
                <h2 className="topic">Work Experience</h2>
                <div className="exp">
                    <h2 className="job">Machine Operator - Daumar Industries</h2>
                    <p className="text">9/19-1/20</p>
                </div>
                <br />
                <p className="text">Organized and executed opening of new flexographic printing facility.</p>
                <br />
                <div className="exp">
                    <h2 className="job">Sales Representative - Hendrick Auto</h2>
                    <p className="text">5/19-9/19</p>
                </div>
                <br />
                <p className="text">Advised customers on deciding which product was best suited for their needs. </p>
                <br />
                <div className="exp">
                    <h2 className="job">Assistant General Manager - Blaze Pizza</h2>
                    <p className="text">1/19-5/19</p>
                </div>
                <br />
                <p className="text">Recruited and mentored new team members, as well as leading day to day operations.</p>
                <br />
                <div className="exp">
                    <h2 className="job">Supervisor - Cava/Zoe's Kitchen</h2>
                    <p className="text">8/17-1/19</p>
                </div>
                <br />
                <p className="text">Developed schedules for all team members, as well as leading day to day operations.</p>
                <br />
                <div className="exp">
                    <h2 className="job">Keyholder - Gamestop</h2>
                    <p className="text">8/14-8/17</p>
                </div>
                <br />
                <p className="text">Operated day to day operations including bank deposits and keeping track of inventory.</p> 
                <br />
                <h2 className="topic">References available upon request</h2>
                <a className="pdf" href="Resume - David Garcia.pdf"><b>PDF of Resume</b></a>           
                </div>
                
        )
        }
    }
export default Resume;