import './HeroCard.css';
import HeroInfo from '../HeroInfo/HeroInfo';
import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';

function HeroCard({
    setEditingHeroOpened,
    nickname,
    oneHero }) {

    const [infoOpened, setInfoOpened] = React.useState(false);
    console.log(oneHero.Images)
    return (
        <div className="heroCardWrapper">
            {infoOpened && <InfoContainer closeInfo={() => setInfoOpened(false)}
                Component={<HeroInfo
                    oneHero={oneHero}
                    setInfoOpened={setInfoOpened}
                    setEditingHeroOpened={setEditingHeroOpened}
                />}
            />}

            <div className="card" onClick={() => setInfoOpened(true)}>
                <img className="editIcon" src="./images/edit.png" alt="edit" onClick={(e) => { e.stopPropagation(); setEditingHeroOpened(true) }} />
                <img className="heroImageOnCard" src={`${oneHero.images}`} alt="" />
                <p>{oneHero.nickname}</p>
            </div>

        </div>

    )
}

export default HeroCard;





