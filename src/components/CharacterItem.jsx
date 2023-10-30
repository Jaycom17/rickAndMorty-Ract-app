import { useEffect, useState } from 'react';
import './styles/CharacterItem.css'
import axios from 'axios';

function CharacterItem({character}){
    const[episode, setEpisode]=useState("");

    useEffect(()=>{
        axios.get(character.episode[0])
        .then(res=>setEpisode(res.data.name))
        .catch(()=>setEpisode("Unkown"));
    },[]);

    return(
        <div className="card">
            <img src={character.image} alt={character.name}/>
            <div className="card-body">
                <h2>{character.name}</h2>
                <p className='status'><span className={character.status=="Alive" ? "alive": "dead"}></span>Status: {character.status} - {character.species}</p>
                <p className='title'>Last Know Location:</p>
                <p className='text'>{character.location.name}</p>
                <p className='title'>First seen in:</p>
                <p className='text'>{episode}</p>
            </div>
        </div>
    )
}

export default CharacterItem;