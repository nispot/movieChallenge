import { useState } from "react";
import { Table } from "./components/Table";
import { MovieDetails } from "./components/MovieDetails";
import { SearchBar } from "./components/SearchBar";
import { useFetchMovies } from "./hooks/useFetchMovies";

import "./App.css";

function App() {
  const apiKey = "572f100e521523a3f80677828f68ede3";
  const discoveryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  const [state, setState] = useState({
    url: discoveryUrl,
    filter: 0,
    movie: null,
    query: "",
  });

  const { url, filter, movie, query } = state;

  const { movies, loading } = useFetchMovies(url);

  const handleSearch = (q) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${q}&page=1&include_adult=false`;
    q !== ""
      ? setState({
          ...state,
          url: searchUrl,
          query: q,
        })
      : setState({
          ...state,
          url: discoveryUrl,
          query: q,
        });
  };

  const handleFilter = (value) => {
    value === filter
      ? setState({
          ...state,
          filter: 0,
        })
      : setState({
          ...state,
          filter: value,
        });
  };

  const handleSelectMovie = (movie) => {
    setState({
      ...state,
      movie,
    });
  };

  const handleGoBack = () => {
    setState({
      ...state,
      movie: null,
    });
  };

  return (
    <div className="App">
      <h1 className="mt-4">The Movie Theater Challenge</h1>
      {movie ? (
        <MovieDetails movie={movie} handleGoBack={handleGoBack} />
      ) : (
        <>
          <SearchBar
            q={query}
            r={filter}
            handleSearch={handleSearch}
            handleFilter={handleFilter}
          />
          <Table
            movies={movies}
            filter={filter}
            handleSelectMovie={handleSelectMovie}
            handleSearch={handleSearch}
            handleFilter={handleFilter}
          />
        </>
      )}
    </div>
  );
}

export default App;
