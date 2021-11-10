export const Table = ({ movies, loading, filter, handleSelectMovie }) => {

  const ratings = [0, 2, 4, 6, 8, 10];

  const greaterThan = (el) => {
    return (
      el.vote_average <= ratings[filter] &&
      el.vote_average >= ratings[filter - 1]
    );
  };

  let filteredMovies = [...movies];
  if (filter) {
    filteredMovies = movies.filter(greaterThan);
  }

  return (
    <>
      {loading ? (
        <div className="p-3 alert alert-info">Loading...</div>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((movie) => (
              <tr key={movie.id} onClick={() => handleSelectMovie(movie)}>
                <th scope="row">
                  <img
                    className="thumb"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </th>
                <td className="align-middle">{movie.original_title}</td>
                <td className="align-middle">{movie.vote_average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!filteredMovies.length && !loading && (
        <div className="p-3 alert alert-danger no-results">
          No results found...
        </div>
      )}
    </>
  );
};
