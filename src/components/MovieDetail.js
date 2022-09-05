import PropTypes from "prop-types";

function MovieDetail({coverImg, title, description, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
      <p>{description}</p>
    </div>  
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;