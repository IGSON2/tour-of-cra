import PropTypes from "prop-types";
import styles from "./OneMovie.module.css";
import default_Img from "./Img/default_Img.jpg";
import default_Back_Img from "./Img/default_back.jpg";

const onErrorImg = (e) => {
  e.target.src = default_Img;
};

const onErrorBackImg = (e) => {
  e.target.src = default_Back_Img;
};

function OneMovieDetail({
  BgImg,
  poster,
  title,
  rating,
  runtime,
  genres,
  summary,
}) {
  return (
    <div className={styles.Movie}>
      {/* Background Img */}
      <div className={styles.background}>
        <img
          className={styles.Detail_bg}
          src={BgImg}
          alt=""
          onError={onErrorBackImg}
        />
      </div>
      <div className={styles.show}>
        <div className={styles.shortView}>
          <div className={styles.shortView_Img}>
            <img src={poster} alt={title} onError={onErrorImg} />
          </div>
          {/* title, rating, runtime, genre */}
          <div className={styles.shortView_letters}>
            <h3>{title}</h3>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            {genres ? (
              <div>
                <b>{"genres"}</b>
                <ul>
                  {genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {summary ? (
          <div className={styles.summary}>
            <p>{summary}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

OneMovieDetail.propTypes = {
  BgImg: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
export default OneMovieDetail;

//alt 태그는 그림이 렌더링 되지 못할 때 나타날 문자열을 지정하기 위한 표식
