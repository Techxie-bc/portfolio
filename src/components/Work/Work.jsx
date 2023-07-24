import './work.css'
import '../Homepage/homepage.css'
import loan from '../../Images/loan.png'
import balance from '../../Images/balancee.png'
import coinschool from '../../Images/cointastic.png'
import coin from '../../Images/coin.png'
import Navbar from '../Navbar/Navbar'

export default function Work (){
    return(
        <>
        <Navbar />
                  <div className="projects">
                        <div className="pro-body">
                            <div className="pro-title">
                            <button className="protitle">
                            <h3>WORKS</h3>
                        </button>
                            </div>
                            <div className="projectbody">
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
                            </div>
                        </div>
                    </div>
           
        </>
    )
}