import './HeroInfo.css';
import React from 'react';


function HeroInfo({ closeInfo, oneHero, allHeroes }) {

    // const renderItems = () => {
    //     return (allHeroes)
    //         .map((item, index) => (
    //                 <HeroInfo
    //                 oneHero={item}
    //                 key={index}
    //                 {...item}
    //                 />
    //         ))
    // }
    return (
        
        <div className="overlay">
            {/* {renderItems()} */}
            <div className="heroInfo">
                <div className='cloudContent'>
                    <img className="heroCloud" src="./images/dialogCloud.png" alt="dialogCloud" />
                    <div className="borderForText">
                        <p className="phrase"> When patriots become heroes </p>
                    </div>

                </div>
                <div className='zoom'>
                    <img className="heroInfoImage" src="./images/marvel-captain.png" alt="HeroInfoImage" />
                </div>
                <img className="closeInfoIcon" src="./images/close.png" alt="close" onClick={closeInfo} />
                <p className='descriptionText'>This  rt as known as (nickname). (description). The superpowers are: (superpowers). The catch-phrase is (catch-phrase)</p>
            </div>
        </div>
    ) 
}

export default HeroInfo;