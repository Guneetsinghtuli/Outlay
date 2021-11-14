import React, { useState, useEffect } from 'react'
import './dashboard.css'
// import DashCard from './DashCard'
// import ToDo from './todo'
import Card from '../home/Card'
import { useHistory } from 'react-router'
import Goal from './Goal'
// import Card from './Card.js'
import ContinueNothing from './continueNothing.js'


const Dashboard = () => {
    const url = "http://localhost:3001"
    const history = useHistory()
    const [userGoal, setuserGoal] = useState([])
    const [state, setstate] = useState("")
    const getUser = async () => {
        const res = await fetch(`${url}/api/v1/user/getuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken": localStorage.getItem('token')
            }
        })
        await res.json()
    }

    const getGoal = async () => {
        const res = await fetch(`${url}/api/v1/goal/getgoal`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken": localStorage.getItem('token')
            }
        })
        let json = await res.json()
        setuserGoal(json)
        if (json.length > 0) {
            getCourse(json)
        }
        console.log(json)

    }

    const getCourse = async (data) => {
        console.log("Course called")
        if (data[0].courses.length === 0) {
            setstate("")
        } else {
            console.log(data[0]._id)
            const nextres = await fetch(`${url}/api/v1/goal/getgoal/${data[0]._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authToken": localStorage.getItem('token')
                }
            })
            let json = await nextres.json()
            console.log(json)
            let length = json.courses.length
            console.log(length)
            if (length === 0) {
                setstate("")
            } else {
                console.log(json.courses[0])
                setstate(json.courses[length - 1])
            }
        }
        console.log(state)
    }

    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            getUser()
            getGoal()
        } else {
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
                            <a href="/login/prediction" className="nav-button--grp2 primary--button2">Add Goals</a>
                        </div>
                    </div>
                    <div className="Border">

                        {userGoal.length === 0 ? <h2 className="border-heading--h2">Looks like you haven't added any goal yet, Click Add to create one!</h2> : userGoal.map((singleGoal, key) => {
                            return <Goal GoalName={`I will Get a ${singleGoal.goalName}`} GoalAmount={`Need ${singleGoal.goalReturns}`} GoalTime={`In ${singleGoal.goalTime} Years`} GoalInvest={`Will invest ${singleGoal.goalMInvest} Monthly`} key={key} />
                        })}

                    </div>
                </div>

                <br></br>
                <div className="dash-section2">
                    <div className="dash-section2-heading">
                        <h2 className="dash-section2-heading--text">Continue Learning...</h2>
                    </div>
                    {state === "" ?
                        <div className="visiblity-continue-learning--nothing">
                            <div className="dash-section2-content">
                                <div className="immg"><img src="../images/Course.png" alt="" className="dash-section2-content--img" />
                                </div><div className="sec2-text">
                                    <p className="dash-section2-content--heading">Getting started with investing in
                                        Cryptocurrency</p>

                                    <p className="dash-section2-content--text">This course is intended to give you
                                        an overview on the topic:
                                        Cryptocurrency- Who all can invest.</p>
                                </div>

                            </div>

                        </div>
                        :
                        <div>
                            <ContinueNothing percent={state.cPercent} />
                        </div>
                    }
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
                            <img src="../images/mutual-funds-vector.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Mutual Funds</p>
                        </div>
                    </div>
                </div>
                <div className="dash-section4-head">
                    <h1 className="deash-section4--heading">Must Read</h1>
                </div>
                <div className="dash-section4">
                    <div className="third-container">
                        <div className="third-container--card_container">
                            <Card name="Complete Guide to Stock Market investment from scratch" working="true" page="home" src="../images/Stock.jpg" />
                            <Card name="Learn To pick the Mutual Find right for you" working="false" src="../images/Mutual.jpg" />
                            <Card name="Getting started with investing in Cryptocurrency" working="false" src="../images/Crypto.jpg" />
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </>
    )
}

export default Dashboard
