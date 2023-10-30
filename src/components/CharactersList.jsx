import { useState, useEffect } from "react";
import axios from "axios";
import CharacterItem from "./CharacterItem.jsx";
import "./styles/CharactersList.css";

function CharactersList(){
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/").then(
            (response) => {
                setCharacters(response.data.results);
                setInfo(response.data.info)
            }).catch(
                (error) => {
                    console.log(error);
                }
            )
    },[]);

    const nextPage = () => {
        if(info.next){
            axios.get(info.next).then(
                (response) => {
                    setCharacters(response.data.results);
                    setInfo(response.data.info)
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    const prevPage = () => {
        if(info.prev){
            axios.get(info.prev).then(
                (response) => {
                    setCharacters(response.data.results);
                    setInfo(response.data.info)
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    return(
        <> 
            <div className="container">
                    {characters.map((character) => {
                        return(
                            <CharacterItem character={character} key={character.id}/>
                        )
                    })}
            </div>
            <div className="prev-next">
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div> 
        </>
    )
}

export default CharactersList;