import Navbar from "../Navbar/Navbar";
import '../Homepage/homepage.css';
import './contact.css';
import github from '../../Images/github-icon.svg'
import mail from '../../Images/gmail-icon.png'
import linkedin from '../../Images/linkedin-app-icon.svg'
import twitter from '../../Images/twitter-color-icon.svg'
import { BiPhoneCall } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Contact () {
    return(
        <>
        <Navbar/>
        <div className="contacts-body">
            <div className="contacttext">
                <h2>CONNECT WITH ME</h2>
                <h4>I look forward to hearing from you!</h4>
            </div>
                    <div className="contacts-page">
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
                            <a href="https://twitter.com/Irene_Onyia">
                        <div className="twitter">
                        <img src={twitter} alt="twitter" target="_blank" rel="noreferrer" />
                            <h3>Twitter</h3>
                        </div>
                        </a>
                            <a href="www.linkedin.com/in/irene-onyia-522783176" target="_blank" rel="noreferrer" >
                        <div className="linkedin">
                                <img src={linkedin} alt="linkedin" />
                            <h3>LinkedIn</h3>
                        </div>
                        </a>
                        <a href="tel:+2348133491087">
                        <div className="phone">
                           <BiPhoneCall size={38}/>
                            <h3>Place A Call</h3>
                        </div>
                        </a>
                        <a href="https://wa.me/+2348133491087">
                        <div className="whatsapp">
                           <IoLogoWhatsapp size={38}/>
                            <h3>Whatsapp</h3>
                        </div>
                        </a>
                    </div>
                </div>
        </>
    )
}