import './HeroInfo.css';
import React from 'react';


function HeroInfo({ closeInfo, oneHero }) {

    return (
        <div>
            <div className='cloudContent'>
                <img className="heroCloud" src="./images/dialogCloud.png" alt="dialogCloud" />
                <div className="borderForText">
                    <p className="phrase"> {oneHero.catch_phrase} </p>
                </div>
            </div>
            <div className='zoom'>
                <img className="heroInfoImage" src={`${oneHero.images}`} alt="HeroInfoImage" />
            </div>
            <p className='descriptionText'>This is {oneHero.real_name} as known as {oneHero.nickname}. {oneHero.origin_description}. The superpowers are: {oneHero.superpowers}. The catch-phrase is {oneHero.catch_phrase}</p>
        </div>
    )
}

export default HeroInfo;