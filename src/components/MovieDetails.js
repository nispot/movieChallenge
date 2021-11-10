export const MovieDetails = ({ movie, handleGoBack }) => {
  return (
    <div className="movie-card text-center">
      <div className="goback-container">
        <button
          type="button"
          className="btn btn-primary float-left"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
      <h2 className="mt-4">{movie.original_title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <p className="overview mt-4">{movie.overview}</p>
    </div>
  );
};
