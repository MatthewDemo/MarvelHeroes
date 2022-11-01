import './HeroCard.css';
import HeroInfo from '../HeroInfo/HeroInfo';

function HeroCard({
    setInfoOpened, 
    setEditingHeroOpened, 
    nickname,
    oneHero}) 
    {
        //console.log(oneHero)
    return (

        <div className="card" onClick={() => setInfoOpened(true)}>
            <img className="editIcon" src="./images/edit.png" alt="edit" onClick={(e) => { e.stopPropagation(); setEditingHeroOpened(true) }} />
            <img className="heroImageOnCard" src="./images/marvel-captain.png" alt="" />
            <p>{nickname}</p>
        </div>
    )
}

export default HeroCard;





