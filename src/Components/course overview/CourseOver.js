import React from 'react'
import './CourseOver.css'

const CourseOver = () => {
  return (
    <>
        <div className="course-main--container">
            <div className="course-main--hero">
                {/* <a href="/#" className="course-hero--button">Courses to get started!</a>
                <img src="./images/course.jpg" alt="" className="course-hero--img" /> */}

                    <div className="buttonco">
                        <a href ="./course-info" className="nav-button--grp4 primary--button4">Courses to get you started!</a>
                    </div>
                    
                        <img src="./images/learning.png" alt="" className="course-hero--img" />
                    
            </div>

            <div className="course-main--reco">
                <div className="course-reco--heading">
                    Topic recommandations for you!

                </div>
                <div className="course-reco--cards">
                     <div className="bluebox">
                         Cryptocurrency
                     </div>
                     <div className="bluebox">
                         Real-estate
                     </div>
                     <div className="bluebox">
                         Stock Market
                     </div>
                     <div className="bluebox">
                         Mutual Funds
                     </div>
                     <div className="bluebox">
                        Digital Gold
                     </div>
                     <div className="bluebox">
                         Mutual Funds
                     </div>
                </div>
            </div>

            <div className="course-main--name">
                <div className="course-name--card">
                Let’s jump right in!
                </div>
                <div className="dash-section3--img--contentainer">
                        <div className="courseOver--img--content">
                            <img src="./images/stocklearn-01.png" alt="" className="courseOver--img" />
                            <p className="courseOver3-content">Stocks</p>
                        </div>
                        <div className="courseOver--img--content">
                            <img src="./images/bitcoin.png" alt="" className="courseOver--img" />
                            <p className="courseOver3-content">Cryptocurrency</p>
                        </div>
                        <div className="courseOver--img--content">
                            <img src="./images/mutual-funds-vector.png" alt="" className="courseOver--img" />
                            <p className="courseOver3-content">Mutual Funds</p>
                        </div>
                    </div>
                
                            </div>
        </div>        
    </>
  )
}

export default CourseOver
