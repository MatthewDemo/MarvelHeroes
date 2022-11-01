import './Main.css';
import HeroCard from '../HeroCard/HeroCard';
import HeroInfo from '../HeroInfo/HeroInfo';

function Main({ infoOpened, setInfoOpened, setAddingHeroOpened, setEditingHeroOpened, allHeroes }) {
    const renderItems = () => {
        return (allHeroes)
            .map((item, index) => (
                    <HeroCard
                        oneHero={item} //??????????????????????????
                        setInfoOpened={setInfoOpened}
                        setEditingHeroOpened={setEditingHeroOpened}
                        key={index}
                        {...item}
                    />
            ))
    }

    return (
        <div className="main">
            <button className="addHeroButton" onClick={() => setAddingHeroOpened(true)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add your hero </button>
            <div className="cards">
                {renderItems()}
            </div>
        </div>
    )
}

export default Main;