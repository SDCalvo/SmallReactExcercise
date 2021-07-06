import {useState} from 'react';

export default function Listado(){

    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies")) || []);

    return(

        <div className="container">
            <div className="row p-3 text-center">
                <div className="col-12"><h1>Películas</h1></div>
                {movies.map((movie, index) => {
                    return(

                        <div key={index} className="col-md-4 mt-3">
                            <div className="card">
                                <div className="card-block">
                                    <img className="card-img-top p-2" src={movie.img} alt="" />
                                    <h4 className="card-title">{movie.title}</h4>
                                    <p className="card-text">{movie.genre}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}