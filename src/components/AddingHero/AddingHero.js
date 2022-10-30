import './AddingHero.css';


function AddingHero({ closeAddingHero }) {
    return (
        <div className="overlay">
            <div className="addingHero">
                <p className='addingHeader'>Add your hero</p>
                <img className="closeAddingHeroIcon" src="./images/close.png" alt="close" onClick={closeAddingHero} />
                <input className='nameInput' placeholder='Name'></input>
                <input className='nameInput' placeholder='Real name'></input>
                <input className='nameInput' placeholder='Description'></input>
                <input className='nameInput' placeholder='Superpowers'></input>
                <input className='nameInput' placeholder='Catch phrase'></input>


                {/* <form enctype="multipart/form-data" method="post">
                    <p><input type="file" name="f" /></p>
                    </form>
                 */}
                
                <button className='saveAddingHero'>Save</button>
                    </div>
            </div>
            )
}

            export default AddingHero;