import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneMovieDetail from "../components/OneMovieDetail";
import Loader from "../components/Loader";
import styles from "./Detail.module.css";
function Detail() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)
      .then((Response) => Response.json())
      .then((returnValue) => {
        setMovie(returnValue.data.movie);
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {
            <OneMovieDetail
              BgImg={movie.background_image_original}
              poster={movie.medium_cover_image}
              title={movie.title_long}
              rating={movie.rating}
              runtime={movie.runtime}
              genres={movie.genres}
              summary={movie.description_intro}
            />
          }
        </div>
      )}
    </div>
  );
}
export default Detail;
