
export default function Home(){

    const movies = JSON.parse(localStorage.getItem("movies"));
    //find recomended equals true movie in movies
    const recomended = movies.filter(movie => movie.recomended === true);
    return(

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1>Película destacada</h1>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
                        <div className="col-md-4 mt-3">
                            <div className="card">
                                <div className="card-block">
                                    <img className="card-img-top p-2" src={recomended[0].img} alt="" />
                                    <h4 className="card-title">{recomended[0].title}</h4>
                                    <p className="card-text">{recomended[0].genre}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}