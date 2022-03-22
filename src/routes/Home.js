import React, { useEffect, useState } from "react";
import AllMovie from "../components/AllMovies";

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const getRequest = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await getRequest.json();
    setMovies(json.data.movies);
    setLoding((prev) => !prev);
  }, []);
  return (
    <div>
      {loding ? (
        <h1>LOADING...</h1>
      ) : (
        movies.map((movie) => (
          <AllMovie
            id={movie.id}
            title={movie.title_long}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            rating={movie.rating}
          />
        ))
      )}
    </div>
  );
}

export default Home;

//NOTE
//<p></p> 문단(paragraph)을 지정하는 태그다.
