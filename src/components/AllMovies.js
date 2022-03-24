import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./AllMovies.module.css";

function AllMovie({ id, title, posterPC, genres, rating, summary }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div className={styles.movieCard} key={id}>
          <div className={styles.movieImgPC}>
            <img src={posterPC} />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.movieTitle}>
              <h1>{title}</h1>
            </div>
            <div className={styles.movieRating}>
              <span className={styles.star}>✔ </span>
              {rating.toFixed(1)}
            </div>
            <div className={styles.movieSummary}>
              {summary.length > 150
                ? `${summary.slice(0, 150)}...<more>`
                : summary}
            </div>
            <div className={styles.movieGenres}>
              <ul>
                {genres.map((g, idx) => (idx === 0 ? `#${g}` : ` #${g}`))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

AllMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

export default AllMovie;
