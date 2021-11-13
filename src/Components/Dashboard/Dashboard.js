import React,{useState,useEffect} from 'react'
import './dashboard.css'
// import DashCard from './DashCard'
// import ToDo from './todo'
import Card from '../home/Card'
import { useHistory } from 'react-router'
import Goal from './Goal'
// import Card from './Card.js'
import ContinueNothing from './continueNothing.js'

const Dashboard = () => {
    const url="http://localhost:3001"
    const history = useHistory()
    const [userGoal, setuserGoal] = useState([])
    const getUser= async() =>{
        const res = await fetch(`${url}/api/v1/user/getuser`, {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken":localStorage.getItem('token')
            }
        })
        let json = await res.json()
        console.log(json)
    }

    const getGoal =async()=>{
        const res = await fetch(`${url}/api/v1/goal/getgoal`, {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken":localStorage.getItem('token')
            }
        })
        let json = await res.json()
        console.log(json)
        setuserGoal(json)
    }

    useEffect(() => {
        if(localStorage.getItem('token') != null){
            getUser()
            getGoal()
        }else{
            history.push("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet"></link>
            <div className="dash-main">
                <div className="dash-hero">
                    <div className="dash-hero--heading">
                        <div className="goalsnav">
                        {/* <h1 className="dash-hero--heading_content"> */}
                           <p className="headinggoals"> Your Goals</p>
                        {/* </h1> */}
                        </div>
                        <div className="goalsnav">
                        <a href ="/login/prediction" className="nav-button--grp2 primary--button2">Add Goals</a>
                        </div>
                    </div>
                    <div className="Border">
                    
                    {userGoal.length === 0 ? <h2>Does't look like you have added any goal, Create one now</h2> :userGoal.map((singleGoal,key)=>{
                        return <Goal GoalName={`I will Get a ${singleGoal.goalName}`} GoalAmount={`Need ${singleGoal.goalReturns}`} GoalTime={`In ${singleGoal.goalTime} Years`} GoalInvest={`Will invest ${singleGoal.goalMInvest} Monthly`} key={key}/>
                    })}

                    </div>
                </div>

                <br></br>
                <div className="dash-section2">
                    <div className="dash-section2-heading">
                        <h2 className="dash-section2-heading--text">Continue Learning...</h2>
                    </div>
                        <div className="visiblity-continue-learning--nothing">
                            <div className="dash-section2-content">
                                <div className = "immg"><img src="../images/learning.png" alt="" className="dash-section2-content--img" />
                                </div><div className = "sec2-text">
                                <p className="dash-section2-content--heading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed ipsam quo velit rerum dolore.</p>
                                
                                <p className="dash-section2-content--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed ipsam quo velit rerum dolore.</p>
                                </div> 
                                  
                            </div>   

                        </div>
                    
                        <div>
                            <ContinueNothing/>
                        </div>
                </div>
                <div className="dash-section3">
                    <div className="dash-section3-head">
                        <h1 className="dash-section3--heading">Courses you might be intrested in... </h1>
                    </div>
                    <div className="dash-section3--img--content">
                        <div className="dash-section3-img-content">
                            <img src="../images/stocklearn-01.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Stocks</p>
                        </div>
                        <div className="dash-section3-img-content">
                            <img src="../images/bitcoin.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Cryptocurrency</p>
                        </div>
                        <div className="dash-section3-img-content">
                            <img src="../images/mutual funds vector.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Mutual Funds</p>
                        </div>
                    </div>
                </div>
                <div className="dash-section4-head">
                        <h1 className="deash-section4--heading">Must Read</h1>
                    </div>
                <div className="dash-section4">
                    
                <div className="third-container--card_container">
                        <Card name="Complete Guide to Stock Market investment from scratch" working="true" />
                        <Card name="Complete Guide to Stock Market investment from scratch" working="false"/>
                        <Card name="Complete Guide to Stock Market investment from scratch" working="false"/>
                    </div>
                    <br></br>
                </div>
            </div>
        </>
    )
}

export default Dashboard
