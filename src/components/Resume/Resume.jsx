import './resume.css'
import '../Homepage/homepage.css'
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar'

export default function Resume() {
    return (
        <>
            <Navbar />
            <div className="resumebody">
                <div class="button-wrap">
                    <button class="tech-title">RESUME</button>
                </div>
                <div className="resume">
                    <Fade bottom>
                        <h1 className='prof' >
                            Chiamaka Irene Onyia
                            donnaogbu@gmail.com +2348133491087 Imo, Nigeria.</h1>
                        <h4>
                            A results-driven Front-End Developer, specializing in UI design and web development. A proven track
                            record of collaborating cross-functionally with technical teams and stakeholders across all phases of
                            the software development lifecycle.

                        </h4>

                        <h3 className='prof'>Professional Experience</h3>
                        <h3 className='experience'>

                            Front-End Developer
                            Balancee Tech solutions. Lagos, Nigeria. September 2022 — Present
                        </h3>
                        <div>
                            <ul>
                                <li>
                                    Designed the user interface and website www.balancee.app for the Balancee tech services
                                    delivering web development services for a company valued at $100k
                                </li>
                                <li>
                                    Translate user requirements into scalable code, develop prototypes conduct wireframing
                                    activities, and ensure alignment with client business specifications
                                </li>
                                <li>
                                    Perform testing on web pages, analyze user feedback, and coordinate with cross-
                                    functional teams to identify opportunities to enhance web page responsiveness.
                                </li>
                                <li>
                                    Partnered with web developers and software developers to create a dynamic web
                                    application for autoshops and customers, which included supporting back-end
                                    development andUI design
                                </li>
                            </ul>
                        </div>
                        <br></br>
                        <hr />
                        <h3 className="prof">Education</h3>
                        <div>
                            <ul>
                                <li>

                                    Bachelor of Technology (B.Tech.)Dental Technology
                                    <br />
                                    Federal University of Technology, Owerri, Imo, Nigeria November 2011 - October 2016
                                </li>
                                <li>
                                    Diploma Software Engineering,
                                    <br />
                                    ALX Africa

                                </li>
                                <li>
                                    Frontend Engineering Course,
                                    <br />

                                    Stutern Graduate Accelerator
                                </li>
                            </ul>
                        </div>

                        <br />
                        <hr />

                        <h3 className="prof">

                            Key Skills
                        </h3>
                        <div>
                            <ul>
                                <li>

                                    Reactjs and Redux state Management
                                </li>
                                <li>

                                    Javascript and Dom manipulation
                                </li>
                                <li>

                                    Git version control
                                </li>

                                <li>

                                    CSS, Styled components, TailwindCSS, bootstrap
                                </li>
                                <li>

                                    Html
                                </li>
                            </ul>
                        </div>

                        <br />
                        <hr />

                        <h2 className='prof'>

                            Personal Projects
                        </h2>
                        <div>
                            <ul>
                                <li>
                                    <a href="https://coinschool.netlify.app/ ">Coinschool</a> Sample of an online web3 school website built with React
                                    Framework, hooks and styled with styled components.
                                </li>
                                <li>
                                    <a href="https://coinislander.netlify.app">CoinIslander</a> Built with the React Library, coinislander gives live feed on
                                    CryptoCurrencies.
                                </li>
                                <li>
                                    <a href="https://frankflix-project.web.app">Frankflix</a> Landing Page of a movie site designed with Reactjs. Firebase
                                    Authentication was implemented for users' login details and Firestore for cloud database.
                                </li>
                            </ul>
                        </div>

                    </Fade >

                </div>
                <div className="download">
                    <a href="https://drive.google.com/file/d/1cKuYx6rrfHBIEkDpcZI2E_gZ8TpbW6K-/view?usp=sharing" target="_blank" rel="noreferrer">
                        <button>Download Resume</button>
                    </a>
                </div>
            </div>
        </>
    )
}