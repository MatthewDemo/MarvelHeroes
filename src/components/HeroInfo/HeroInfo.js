import './HeroInfo.css';


function HeroInfo({ closeInfo }) {
    return (
        <div className="overlay">
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
                <p className='descriptionText'>This is (real name) as known as (nickname). (description). The superpowers are: (superpowers). The catch-phrase is (catch-phrase)</p>
            </div>
        </div>
    )
}

export default HeroInfo;