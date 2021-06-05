import {firebaseDatabase} from "../../firebase/firebase";
import {useEffect, useState} from "react";

function Row(props){

    const [movies,setMovies] = useState([]);

    const {title, movieType, onMovieSelected } = props;

    const leafRoot = 'movies';

    useEffect(()=>{
        fetchMovies(movieType);
    },[]);


    const fetchMovies = (movieType) =>{
        const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
        movieRef.on("value",(snapshot) => {
            const movies = snapshot.val();
            if(movies && movies.length!==0){
                setMovies(() => movies);
            }
        });
    };


    const onMovieClicked = (movie) => {
        onMovieSelected(movie);
    }


    return(
        <div className = "row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map((movie) => (
                        <img
                        onClick={() => onMovieClicked(movie)}
                        className = "row__poster row__posterLarge"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt = {movie.original_name} />
                    ))}
            </div>
        </div>

    );
}

export default Row;