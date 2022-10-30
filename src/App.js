import './App.css';
import React from 'react';
import HeroInfo from './components/HeroInfo/HeroInfo';
import AddingHero from './components/AddingHero/AddingHero';



function App() {
  const [infoOpened, setInfoOpened] = React.useState(false);
  const [addingHeroOpened, setAddingHeroOpened] = React.useState(false);


  return (
    <div className="App">
      {infoOpened && <HeroInfo closeInfo={() => setInfoOpened(false)} />}
      {addingHeroOpened && <AddingHero closeAddingHero={() => setAddingHeroOpened(false)} />}

      <div className="header">
        <img className="headermarvel" src="./images/marvel.jpg" alt="marvel" />
      </div>
      <div className="main">
        <button className="addHeroButton" onClick={() => setAddingHeroOpened(true)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add your hero </button>
        <div className="cards">
          <div className="card" onClick={() => setInfoOpened(true)}>
            <img className="editIcon" src="./images/edit.png" alt="edit" />
            <img className="heroImageOnCard" src="./images/marvel-captain.png" alt="" />
            <p>Captain</p>
          </div>
          <div className="card" >
            <img className="editIcon" src="./images/edit.png" alt="edit" />
            <img className="heroImageOnCard" src="./images/marvel-hulk.png" alt="" />
            <p>Hulk</p>
          </div>
          <div className="card">
            <img className="editIcon" src="./images/edit.png" alt="edit" />
            <img className="heroImageOnCard" src="./images/marvel-blackwidow.png" alt="" />
            <p>blackwidow</p>
          </div>
          <div className="card">
            <img className="editIcon" src="./images/edit.png" alt="edit" />
            <img className="heroImageOnCard" src="./images/marvel-hawkeye.png" alt="" />
            <p>hawkeye</p>
          </div>
          <div className="card">
            <img className="editIcon" src="./images/edit.png" alt="edit" />
            <img className="heroImageOnCard" src="./images/marvel-thor.png" alt="" />
            <p>thor</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
