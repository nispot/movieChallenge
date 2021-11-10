import { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

export const SearchBar = ({ q, r, handleSearch, handleFilter }) => {
  const [query, setQuery] = useState(q);
  const [rating, setRating] = useState(r);

  const HandleQueryChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const HandleRatingChange = (e) => {
    e === rating ? setRating(0) : setRating(e);
    handleFilter(e);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={HandleQueryChange}
        />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={HandleRatingChange}
        />
      </form>
    </nav>
  );
};
