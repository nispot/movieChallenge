import { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';

export const SearchBar = ({handleSearch, handleFilter}) => {
    const [query, setQuery] = useState('');
    const [rating, setRating] = useState(0);

    const HandleQueryChange = (e) => {
        setQuery(e.target.value);
        handleSearch (e.target.value);
    }

    const HandleRatingChange = (e) => {
              
        e === rating ?
            setRating(0) :
            setRating(e); 
            handleFilter (e);
            //console.log(rating)
        //setQuery(e.target.value);
        //handleSearch (e.target.value);
    }

    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
            <input 
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {query}
                onChange = { HandleQueryChange }
                />
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onStarClick= { HandleRatingChange }
                />
        </form>
        </nav>
    )
}
