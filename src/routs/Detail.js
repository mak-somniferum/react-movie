import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail"

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const {id} = useParams();
  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie)
    setMovies(json.data.movie);
    setLoading(false);
  }
  useEffect(()=>{
    getMovie();
  }, [])
  return(
    <div>
        {loading ? "Loading..." : (
          <div>
            <h1>Detail</h1>
            <MovieDetail coverImg={movies.large_cover_image} title={movies.title_long} description={movies.description_full} genres={movies.genres} />
          </div>
        )}
    </div>
    
  );
}

export default Detail;