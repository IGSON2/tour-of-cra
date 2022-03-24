import React, { useEffect, useState } from "react";
import AllMovie from "../components/AllMovies";
import Loader from "../components/Loader";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      {loding ? (
        <Loader />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <AllMovie
              id={movie.id}
              title={movie.title}
              year={movie.year}
              posterPC={movie.medium_cover_image}
              genres={movie.genres}
              rating={movie.rating}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

//NOTE
//<p></p> 문단(paragraph)을 지정하는 태그다.
