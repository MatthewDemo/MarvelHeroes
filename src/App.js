import './App.css';
import React from 'react';
import axios from 'axios';
import HeroInfo from './components/HeroInfo/HeroInfo';
import AddingHero from './components/AddingHero/AddingHero';
import EditingHero from './components/EditingHero/EditingHero';
import Main from './components/Main/Main';

export const AppContext = React.createContext({});


function App() {
  const [infoOpened, setInfoOpened] = React.useState(false);
  const [addingHeroOpened, setAddingHeroOpened] = React.useState(false);
  const [editingHeroOpened, setEditingHeroOpened] = React.useState(false);


  const [allHeroes, setAllHeroes] = React.useState([]); //??????????????????


  React.useEffect(() => {
    async function fetchData() {
      const heroesResponse = await axios.get('http://localhost:8001/get-heroes')
      setAllHeroes(heroesResponse.data)
    }
    fetchData()
  }, []); //????????????????????????????????????????????




  return (
    <AppContext.Provider value={{ allHeroes }}>
      <div className="App">
        <div className="header">
          <img className="headermarvel" src="./images/marvel.jpg" alt="marvel" />
        </div>

        {infoOpened && <HeroInfo
          allHeroes={allHeroes}
          closeInfo={() => setInfoOpened(false)}
          setInfoOpened={setInfoOpened}
          setEditingHeroOpened={setEditingHeroOpened}
        />}

        {addingHeroOpened && <AddingHero closeAddingHero={() => setAddingHeroOpened(false)} />}
        {editingHeroOpened && <EditingHero closeEditingHero={() => setEditingHeroOpened(false)} />}

        <Main
          allHeroes={allHeroes} //?????????????????????????????????
          setInfoOpened={setInfoOpened}
          setAddingHeroOpened={setAddingHeroOpened}
          setEditingHeroOpened={setEditingHeroOpened}
        >
        </Main>

      </div>
    </AppContext.Provider>

  );
}

export default App;
