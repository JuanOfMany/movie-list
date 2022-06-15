import React from 'react';
import Movie from './Movie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {displayed : props.movies};
    this.state.displayed = props.movies;
  }

  render() {
    console.log(this.props.movies)
    const movieItems = this.props.movies.map((movie) =>
    (<Movie key={String(Math.random())} movie={movie} />)
    );

    return (<ul>{movieItems}</ul>)
  }
}

export default MovieList