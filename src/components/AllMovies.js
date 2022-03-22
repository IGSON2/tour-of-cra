import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AllMovie({ id, title, poster, genres, rating }) {
  return (
    <div key={id}>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img src={poster} />
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>{rating}</p>
    </div>
  );
}

AllMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AllMovie;
