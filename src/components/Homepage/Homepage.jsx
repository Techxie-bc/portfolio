import Navbar from "../Navbar/Navbar";
import './homepage.css';
import dev from '../../Images/undraw_teacher_re_sico.svg'
import {ReactComponent as Reactic} from '../../Images/react-js-icon.svg'
import {ReactComponent as Javasc} from '../../Images/javascript-programming-language-icon.svg'
import {ReactComponent as Reduxic} from '../../Images/redux-icon.svg'
import {ReactComponent as Css} from '../../Images/css-icon.svg'
import coin from '../../Images/coin.png'
import github from '../../Images/github-icon.svg'
import mail from '../../Images/gmail-icon.png'
import linkedin from '../../Images/linkedin-app-icon.svg'
import twitter from '../../Images/twitter-color-icon.svg'

export default function Homepage() {
    return (
        <>
            {/* NAVBAR */}
            <Navbar />
            {/* HOME */}
            <div className="container">

                <div className="home">
                    <div className="bio">
                        <div className="topbio">
                            <p className="shake-emoji">&#x1F44B; Warm Greetings from Irene</p>
                        </div>
                        <div className="midbio">
                            <p>const FullName = &#91;Chiamaka Irene, Onyia&#93;</p>
                            <h3>Smart Frontend Engineer. I help startups launch and grow, and enable companies to boost their profits. As a valuable asset to your team day and night, I'm readily available to make your website dreams come true.



                                Let's collaborate and bring your digital vision to life with a touch of creativity and seamless user experiences. Together, we'll make a lasting impact on the digital world. 🚀"
                            </h3>
                        </div>
                    </div>
                    <div className="imagehome">
                        <div>
                            <img src={dev} alt="Frontend developer" />
                        </div>
                    </div>
                </div>
                {/* TECHNOLOGIES */}
                <div className="tech-body">

                    <div className="technologies">
                </div>


                        <div className="list">
                            <div class="button-wrap">
                                <button class="tech-title">TECHNOLOGIES</button>
                            </div>
                            <div className="tools">
                                <div className="tool">
                                   <Reactic className="techtool"/>
                                   <p className="techdesc">React</p>
                                </div>
                                <div className="tool">
                                    <Javasc className="techtool"/>
                                   <p className="techdesc">Javascript</p>

                                </div>
                                <div className="tool">
                                   <Reduxic className="techtool"/>
                                   <p className="techdesc">Redux</p>

                                </div>
                                {/* <div className="tool">
                                   <Flutter />
                                </div> */}
                                <div className="tool">
                                   <Css className="techtool"/>
                                   <p className="techdesc">CSS</p>

                                </div>
                            </div>
                         
                        </div>

                    </div>
                    <div className="bio">
                        <button className="biotitle">
                            <h3>WORK ETHICS </h3>
                        </button>
                        <h5>
                        "Smart Frontend Engineer. I help startups launch and grow, and enable companies to boost their profits. As a valuable asset to your team day and night, I'm readily available to make your website dreams come true.

I pride myself on learning technologies fast, allowing me to stay at the forefront of cutting-edge developments in the frontend landscape. Working seamlessly with cross-functional teams in time-pressured settings, I ensure projects are completed on schedule and within budget. <br/>
As a frontend engineer, I wholeheartedly embrace the growth mindset. I see challenges as stepping stones to progress and approach every obstacle with a thirst for learning. Embracing this mindset empowers me to continually evolve, staying on the cutting edge of the rapidly evolving web technologies. With a growth-oriented perspective, I fearlessly take on ambitious projects, pushing the boundaries of my skills and expertise.<br/>

The growth mindset fuels my passion for excellence, enabling me to thrive in a dynamic and ever-changing digital landscape. I relish in the satisfaction of conquering new coding techniques and honing my craft, always seeking opportunities to expand my knowledge. By nurturing this mindset, I'm not just a frontend engineer; I'm a lifelong learner on an exciting journey of personal and professional growth.<br/>

Let's collaborate and bring your digital vision to life with a touch of creativity and seamless user experiences. Together, we'll make a lasting impact on the digital world. 🚀"
                        </h5>
                    </div>
                    <div className="projects">
                        <div className="pro-body">
                            <div className="pro-title">
                            <button className="protitle">
                            <h3>PROJECTS</h3>
                        </button>
                            </div>
                            <div className="projectbody">
                                <div className="projectlist">
                                    <div className="project">
                                        <img src={coin} alt="coin island" />
                                        <h3 className="name">Coin Island</h3>
                                        <p className="desc">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aut esse, delectus nemo culpa voluptate quam maiores animi nam ducimus.
                                        </p>
                                        {/* <a href="#">see more</a> */}
                                    </div>
                                    <div className="project">
                                        <img src={coin} alt="coin island" />
                                        <h3 className="name">Coin Island</h3>
                                        <p className="desc">

                                        </p>
                                        {/* <a href="#">see more</a> */}
                                    </div>
                                    <div className="project">
                                        <img src={coin} alt="coin island" />
                                        <h3 className="name">Coin Island</h3>
                                        <p className="desc">

                                        </p>
                                        {/* <a href="#">see more</a> */}
                                    </div>
                                    <div className="project">
                                        <img src={coin} alt="coin island" />
                                        <h3 className="name">Coin Island</h3>
                                        <p className="desc">

                                        </p>
                                        {/* <a href="#">see more</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-body">
                        <div className="contacts">
                            <div className="github">
                                <a href="https://github.com/Techxie-bc" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                                <h3>GitHub</h3>
                            </div>
                            <div className="mail">
                                <a href="mailto:donnaogbu@gmail.com" target="_blank" rel="noreferrer"><img src={mail} alt="mail" /></a>
                                <h3>Mail</h3>
                            </div>
                            <div className="twitter">
                                <a href="/"><img src={twitter} alt="twitter" target="_blank" rel="noreferrer"/></a>
                                <h3>Twitter</h3>
                            </div>
                            <div className="linkedin">
                                <a href="/"><img src={linkedin} alt="linkedin" target="_blank" rel="noreferrer"/></a>
                                <h3>LinkedIn</h3>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
            <p>Made with love <span>💚</span> &copy; Copyright 2023, Chiamaka Irene Onyia. All Rights Reserved.</p>
        </div>

            </div>

        </>
    )
}