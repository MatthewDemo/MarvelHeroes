import './EditingHero.css';
import React from 'react';
import axios from 'axios';


function EditingHero({ closeEditingHero }) {

    const [nickname, setNickname] = React.useState();
    const [real_name, setRealName] = React.useState();
    const [origin_description, setDescription] = React.useState();
    const [superpowers, setSuperpowers] = React.useState();
    const [catch_phrase, setPhrase] = React.useState();
    const [images, setImage] = React.useState();


    const handlerOnChange = (files) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files" + i, files[i]);
        }
        setImage(formData);
    }

    const addHero = () => {
        axios.post('http://localhost:8001/set-image-for-hero', images,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    }

    return (
            <div >
                <h1 className='addingHeader'>Edit this hero</h1>
                <input className='nameInput' placeholder='Name' onInput={(e) => {
                    e.preventDefault();
                    setNickname(e.target.value);
                }}></input>
                <input className='nameInput' placeholder='Real name' onInput={(e) => {
                    e.preventDefault();
                    setRealName(e.target.value);
                }}></input>
                <input className='nameInput' placeholder='Description' onInput={(e) => {
                    e.preventDefault();
                    setDescription(e.target.value);
                }}></input>
                <input className='nameInput' placeholder='Superpowers' onInput={(e) => {
                    e.preventDefault();
                    setSuperpowers(e.target.value);
                }}></input>
                <input className='nameInput' placeholder='Catch phrase' onInput={(e) => {
                    e.preventDefault();
                    setPhrase(e.target.value);
                }}></input>
                <div className="downloadDiv">
                    <p>Add photos of this hero</p>
                    <input type="file" onChange={(e) => handlerOnChange(e.target.files)} multiple />
                </div>
                <button className='saveAddingHero' onClick={addHero}>Save changes</button>
            </div>
    )
}

export default EditingHero;