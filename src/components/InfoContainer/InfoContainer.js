import './InfoContainer.css';
import React from 'react';


function InfoContainer({ Component, closeInfo }) {
    return (
        <div className="overlay">
            <div className="infoContainer">
                <img className="closeInfoIcon" src="./images/close.png" alt="close" onClick={closeInfo} />
                {Component}
            </div>
        </div>
    )
}

export default InfoContainer;