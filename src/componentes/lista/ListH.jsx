import {useEffect, useState} from "react";
import './listh.css';
import {Link} from "react-router-dom";

export const ListH = () => {
    const [characters, setCharacters] = useState([]);

    const headers = "ts=1&apikey=351119be61e4a9fdcd26ed5e3f1bc39f&hash=a41dc3825a18e3de3f0b28e5c28d5edc";
    const URL_BASE = `https://gateway.marvel.com/v1/public/characters?${headers}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL_BASE);
                const data = await response.json();
                console.log(data);
                setCharacters(data.data.results);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, [URL_BASE]);

    return (
        <div className="center">
            <h1> DIEGO OSWALDO</h1>
            {characters.map(character => (<div className="card" key={character.id}>
                <Link to={`heroe/${character.id}`}>

                    <div className="additional">
                        <div className="user-card">
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                 alt={character.name} className="character-image" width={250}/>
                        </div>
                        <div className="more-info">
                            <h1>{character.name}</h1>
                            <p>{character.description}</p>
                        </div>
                    </div>

                </Link>

            </div>))}
        </div>);
};
