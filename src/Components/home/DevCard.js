import React from 'react';
import "./DevCard.css";

const DevCard = (props) => {
    return (
        <>
            <div className="fifth-container--card">
                <img src={props.src} alt="" className="fifth-container--card-image" />
                <p className="fifth-container--card-content">{props.message}</p>
                <h3 className="fifth-container--card-title">Name: {props.name}</h3>
            </div>
        </>
    )
}

export default DevCard
