import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {

const movieItems = props.movies.map((movie) =>
(<Movie key={movie.title} movie={movie} />)
);

return (<ul>{movieItems}</ul>)
}

export default MovieList