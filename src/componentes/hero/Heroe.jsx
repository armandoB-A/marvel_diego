import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../lista/listh.css';
export const Heroe = () => {
    const params = useParams();
    const [hero, setHero] = useState(null);
    const [comics, setComics] = useState([]);
    const [series, setSeries] = useState([]);

    const headers = "ts=1&apikey=351119be61e4a9fdcd26ed5e3f1bc39f&hash=a41dc3825a18e3de3f0b28e5c28d5edc";
    const URL_BASE = `https://gateway.marvel.com/v1/public/characters/${params.claveh}?${headers}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL_BASE);
                const data = await response.json();
                console.log(data);
                setHero(data.data.results[0]);
                setComics(data.data.results[0].comics.items);
                setSeries(data.data.results[0].series.items);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, [URL_BASE]);

    return (
        <>
            <div id="container">
                <div className="example-page">
                    <div>
                        <h1>Descripción héroe</h1>
                    </div>

                    {hero && (
                        <div className="hero-info">
                            <h2>{hero.name}</h2>
                            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} className="hero-image" width={200}/>
                        </div>
                    )}

                    <div id="main">
                        <div className="c1">
                            <div id="lovely-things-list">
                                <ul className="list">
                                    {comics.map((comic, index) => (
                                        <li key={index}>
                                            <h4>
                                                <span className="name">{comic.name}</span> <span className="category">Comic</span>
                                            </h4>
                                        </li>
                                    ))}
                                    {series.map((serie, index) => (
                                        <li key={index}>
                                            <h4>
                                                <span className="name">{serie.name}</span> <span className="category">Series</span>
                                            </h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
