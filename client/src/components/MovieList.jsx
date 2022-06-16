import React from 'react';
import Movie from './Movie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const movieItems = this.props.movies.map((movie) =>
    (<Movie key={String(Math.random())} movie={movie} />)
    );

    return (<ul>{movieItems}</ul>)
  }
}

export default MovieList