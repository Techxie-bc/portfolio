import Navbar from "../Navbar/Navbar";
import './homepage.css';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import dev from '../../Images/undraw_teacher_re_sico.svg'
import { ReactComponent as Reactic } from '../../Images/react-js-icon.svg'
import { ReactComponent as Javasc } from '../../Images/javascript-programming-language-icon.svg'
import { ReactComponent as Reduxic } from '../../Images/redux-icon.svg'
import { ReactComponent as Css } from '../../Images/css-icon.svg'
import loan from '../../Images/loan.png'
import balance from '../../Images/balancee.png'
import coinschool from '../../Images/cointastic.png'
import coin from '../../Images/coin.png'
import github from '../../Images/github-icon.svg'
import mail from '../../Images/gmail-icon.png'
import linkedin from '../../Images/linkedin-app-icon.svg'
import twitter from '../../Images/twitter-color-icon.svg'
import { IoLogoWhatsapp } from 'react-icons/io'


export default function Homepage() {
    return (
        <>
            {/* NAVBAR */}
            <Navbar />
            {/* HOME */}
            <div className="container">

                <div className="home">
                <Fade left>
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
                    </Fade>
                    <Fade right>
                    <div className="imagehome">
                        <img src={dev} alt="Frontend developer" />
                    </div>
                    </Fade>
                </div>
                {/* TECHNOLOGIES */}
                <div className="tech-body">
                    <div className="list">
                        <div class="button-wrap">
                        <RubberBand>
                            <button class="tech-title">TECHNOLOGIES</button>
                        </RubberBand>
                        </div>
                        <div className="tools">
                            <div className="tool">
                                <Reactic className="techtool" />
                                <p className="techdesc">React</p>
                            </div>
                            <div className="tool">
                                <Javasc className="techtool" />
                                <p className="techdesc">Javascript</p>

                            </div>
                            <div className="tool">
                                <Reduxic className="techtool" />
                                <p className="techdesc">Redux</p>

                            </div>

                            <div className="tool">
                                <Css className="techtool" />
                                <p className="techdesc">CSS</p>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="bio">
                    <Fade bottom>
                        <button className="biotitle">
                            <h3>WORK ETHICS </h3>
                        </button>
                    </Fade>
                    <Fade bottom>

                        <h5>
                            "Smart Frontend Engineer. I help startups launch and grow, and enable companies to boost their profits. As a valuable asset to your team day and night, I'm readily available to make your website dreams come true.

                            I pride myself on learning technologies fast, allowing me to stay at the forefront of cutting-edge developments in the frontend landscape. Working seamlessly with cross-functional teams in time-pressured settings, I ensure projects are completed on schedule and within budget. <br />
                            As a frontend engineer, I wholeheartedly embrace the growth mindset. I see challenges as stepping stones to progress and approach every obstacle with a thirst for learning. Embracing this mindset empowers me to continually evolve, staying on the cutting edge of the rapidly evolving web technologies. With a growth-oriented perspective, I fearlessly take on ambitious projects, pushing the boundaries of my skills and expertise.<br />

                            The growth mindset fuels my passion for excellence, enabling me to thrive in a dynamic and ever-changing digital landscape. I relish in the satisfaction of conquering new coding techniques and honing my craft, always seeking opportunities to expand my knowledge. By nurturing this mindset, I'm not just a frontend engineer; I'm a lifelong learner on an exciting journey of personal and professional growth.<br />

                            Let's collaborate and bring your digital vision to life with a touch of creativity and seamless user experiences. Together, we'll make a lasting impact on the digital world. 🚀"
                        </h5>
                    </Fade>

                </div>
                <div className="projects">
                    <div className="pro-body">
                        <div className="pro-title">
                            <button className="protitle">
                                <h3>PROJECTS</h3>
                            </button>
                        </div>
                        <div className="projectbody">
                            <Fade right>
                            <div className="projectlist">
                                <div className="project">
                                    <img src={loan} alt="coin island" />
                                    <h3 className="name">Omega Loan Prediction</h3>
                                    <p className="desc">
                                        Welcome to Omega Loan Prediction, the smart solution for assessing your loan approval chances. Our advanced algorithms analyze your details to provide personalized predictions, helping you make informed decisions. Trust Omega for accurate loan assessments, making your financial journey hassle-free and successful. Experience the power of data-driven lending with Omega today.
                                    </p>
                                    <div className="lastbtn">
                                        <button>REACT</button>
                                        <button className="site">
                                            <a href="https://loan-prediction-app-group-1b.netlify.app/">Visit Site</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src={coin} alt="coin island" />
                                    <h3 className="name">Coin Island</h3>
                                    <p className="desc">
                                        Welcome to Coin Island, your gateway to the world of cryptocurrencies. Explore real-time data of the top 50 cryptocurrencies and stay up-to-date with their latest prices. Our platform offers a seamless and user-friendly experience, empowering you with valuable insights to make informed investment decisions.
                                    </p>
                                    <div className="lastbtn">
                                        <button>REACT</button>
                                        <button className="site">
                                            <a href="https://coin-island-today.netlify.app/">Visit Site</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src={balance} alt="coin island" />
                                    <h3 className="name">Balancee</h3>
                                    <p className="desc">
                                        Welcome to Balancee Auto Shop, where precision meets performance. Our dedicated team of automotive experts is committed to keeping your vehicle in top-notch condition. From routine maintenance to complex repairs, we strive for excellence in every service we provide. With state-of-the-art equipment and a passion for automobiles, we ensure that your ride maintains its perfect balance on the road. Trust Balancee Auto Shop for reliability, efficiency, and a smooth driving experience. Your car's well-being is our priority.
                                    </p>
                                    <div className="lastbtn">
                                        <button>JAVASCRIPT</button>
                                        <button className="site">
                                            <a href="https://balancee.app">Visit Site</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="project">
                                    <img src={coinschool} alt="coin island" />
                                    <h3 className="name">Coin Island</h3>
                                    <p className="desc">
                                        Welcome to Coin School, your premier destination for web3 education. Unlock the potential of blockchain technology and cryptocurrency in our comprehensive online courses. Our expert instructors guide you through the intricate world of decentralized finance, smart contracts, NFTs, and more. Whether you're a beginner or an experienced developer, Coin School offers a range of interactive lessons tailored to your skill level.
                                    </p>
                                    <div className="lastbtn">
                                        <button>REACT</button>
                                        <button className="site">
                                            <a href="https://balancee.app">Visit Site</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="contact-body">
                    <div className="contacts">
                        <a href="https://github.com/Techxie-bc" target="_blank" rel="noreferrer">
                            <div className="github">
                                <img src={github} alt="github" />
                                <h3>GitHub</h3>
                            </div>
                        </a>
                        <a href="mailto:donnaogbu@gmail.com" target="_blank" rel="noreferrer">
                            <div className="mail">
                                <img src={mail} alt="mail" />
                                <h3>Mail</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="twitter">
                                <img src={twitter} alt="twitter" target="_blank" rel="noreferrer" />
                                <h3>Twitter</h3>
                            </div>
                        </a>
                        <a href="www.linkedin.com/in/irene-onyia-522783176">
                            <div className="linkedin">
                                <img src={linkedin} alt="linkedin" />
                                <h3>LinkedIn</h3>
                            </div>
                        </a>
                        <a href="https://wa.me/+2348133491087">
                            <div className="whatsapp">
                                <IoLogoWhatsapp size={38} />
                                <h3>Whatsapp</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer">
                    <p>Made with love <span>💚</span> &copy; Copyright 2023, Chiamaka Irene Onyia. All Rights Reserved.</p>
                </div>

            </div>

        </>
    )
}