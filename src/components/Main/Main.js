import './Main.css';
import HeroCard from '../HeroCard/HeroCard';

function Main({ setAddingHeroOpened, allHeroes, setEditingHeroOpened }) {
    console.log(allHeroes)
    const renderItems = () => {
        return (allHeroes)
            .map((hero, index) => (
                <HeroCard
                    setEditingHeroOpened={setEditingHeroOpened}
                    oneHero={hero} //??????????????????????????
                    key={index}
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