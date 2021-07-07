import {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Admin(){

    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies")) || []);
    const [inputs, setInputs] = useState({

        title: "",
        genre: "",
        img: ""
    });

    useEffect(() => {console.log(movies)}, []);

    function addMovie(e){
        const movie = {

            title: inputs.title,
            genre: inputs.genre,
            img: inputs.img,
            recomended: false,
        }
        e.preventDefault(); //pasar a local storage
        const updatedMovies = [...movies, movie];
        setMovies(updatedMovies);
        const moviesJSON = JSON.stringify(updatedMovies);
        localStorage.setItem("movies", moviesJSON);
        setInputs({
            title: "",
            genre: "",
            img: ""
        });
        alert("Película agregada a la base de datos");
    }


    function handleAddInput(e){

        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    function recomendMovie(index){

        const updatedMovies = [...movies];
        //set every movie recomended to false
        updatedMovies.map((movie, i) => {
            updatedMovies[i].recomended = false;
        });
        updatedMovies[index].recomended = true;
        const moviesJSON = JSON.stringify(updatedMovies);
        localStorage.setItem("movies", moviesJSON);
        setMovies(updatedMovies);
    }

    function deleteMovie(index){
        
        let updatedMovies = [...movies];
        console.log(updatedMovies)
        //set every movie recomended to false
        updatedMovies.map((movie, i) => {
            if(i == index){
                updatedMovies.splice(i, 1);
            }
        });
        const moviesJSON = JSON.stringify(updatedMovies);
        localStorage.setItem("movies", moviesJSON);
        setMovies(updatedMovies);
    };

    function editMovie(){};

    return(
    
    <>

        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center my-3"><h1>Agregar película</h1></div>
                <div className="col-12 bg-warning p-3 mt-3 rounded">
                    <Form>
                        <Form.Label className="mt-2">Título</Form.Label>
                        <Form.Control type="text" name="title" value={inputs.title} onChange={handleAddInput} placeholder="Ingrese un título"/>
                        <Form.Label className="mt-2">Género</Form.Label>
                        <Form.Control type="text" name="genre" value={inputs.genre} onChange={handleAddInput} placeholder="Ingrese un género"/>
                        <Form.Label className="mt-2">Imagen</Form.Label>
                        <Form.Control type="text" name="img" value={inputs.img} onChange={handleAddInput} placeholder="Ingrese la URL de la imagen"/>
                        <Button className="mt-3" onClick={addMovie}>Agregar película</Button>
                    </Form>
                </div>
                <div className="col-12 my-4">
                    <div className="text-center mb-2"><h3>Listado de películas</h3></div>
                    <div className="row">
                        {movies.map((movie, index) => {
                            return (
                                <div key={index} className="col-12 my-2 border p-2 rounded bg-warning">
                                    <span>Título: {movie.title} - Género: {movie.genre} - Recomendada:{
                                        movie.recomended ? <span className="text-success h4"> ✓</span> : <span className="text-danger h4"> ✗</span>
                                    }
                                    </span>
                                    <button className="float-right btn btn-success mx-2" onClick={()=>{ recomendMovie(index)}}>Destacar película</button>
                                    <button className="float-right btn btn-success mx-2" onClick={()=>{ deleteMovie(index)}}>Eliminar película</button>
                                    <button className="float-right btn btn-success mx-2" onClick={()=>{ editMovie(index)}}>Editar película</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}