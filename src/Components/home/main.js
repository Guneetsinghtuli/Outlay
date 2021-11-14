import React from 'react'
import "./main.css"
import Card from './Card'
import DevCard from './DevCard'


const Home = () => {
    return (
        <>
            <div className="main-container">
                <div className="first-container">
                    <div className="first-container-content">
                        <h1 className="first-container--heading">Learn<br /> the art of <br /> investing for free!!</h1>
                        <a href="/login" className="first-container--getstarted">Get Started</a>
                    </div>
                    <img src="./images/Bitcoin _Flatline.png" alt="" className="first-container--img" />
                </div>
                <div className="second-container">
                    <img src="./images/tempupdate-01.jpg" alt="" className="second-container--img" />
                </div>
                <div className="third-container">
                    <h1 className="third-container--heading">What have we got for you?</h1>
                    <div className="third-container--card_container">
                        <Card name="Complete Guide to Stock Market investment from scratch" working="true" page="home" src="../images/Stock.jpg"/>
                        <Card name="Learn To pick the Mutual Find right for you" working="false" src="../images/Mutual.jpg"/>
                        <Card name="Getting started with investing in Cryptocurrency" working="false" src="../images/Crypto.jpg"/>
                    </div>
                </div>
                <div className="fourth-container">
                    <div className="fourth-container-div1">
                        <h1 className="fourth-container--heading">Why Us?</h1>
                        <p className="fourth-container--para extra-light">A one line answer to this question is- Because we have been there. We, four college individuals understand the value of money and we really want to
                            enhance savings as well as investment culture in every age group. Through our website we aim to raise awareness for all age groups regarding all the investment related questions faced by them in their daily lives. <br />
                            We not only support one platform or method for investment but believe in multi platform investments and wish to make a change in people’s lives by making them thorough with this concept. <br />
                            Still in doubt?<br />
                            Create an account and get to know more about our website.</p>
                    </div>
                    <div className="fourth-container-div2">
                        <h1 className="fourth-container--heading">Who is it for?</h1>
                        <p className="fourth-container--para extra-bold">Well, to avail benefits from Outlay, you just need to be 18 plus and that’s it your are ready to go.</p>
                    </div>
                </div>

                <div className="fifth-container">
                    <div className="fifth-container--heading">
                        <h1 className="fifth-container--heading-h1">
                            Developer Section
                        </h1>
                    </div>
                    <div className="fifth-container--card_container">
                        <DevCard name="Tilak Atri" message="Currently into MERN stack, I am a development freak and a coding enthusiast and look forward for providing more services regarding this." src="../images/Tilak.jpeg"/>
                        <DevCard name="Guneet Singh" message="Been into back end since forever and want to change the norms for society by providing solutions to problems persisting in daily life." src="../images/Guneet.jpeg"/>
                        <DevCard name="Divyanshi Choudhary" message="A content writer by heart, The UI designs that are seen on this website are designed by me along with my team and this is what my specialization is." src="../images/Divyanshi.jpg"/>
                        <DevCard name="Harshul Namdev" message="Front end development being my forte, I have done various projects in this field providing me good amount of exposure as well as the skills required." src="../images/Harshul.jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
