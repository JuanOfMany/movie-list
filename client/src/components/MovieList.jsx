import React from 'react';
import Movie from './Movie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: this.props.movies,
      displayed: []
    }
    this.switchClickHandler = this.switchClickHandler.bind(this);
  }

  switchClickHandler = function(event) {
    event.target.style.backgroundColor ='green'
    this.props.changeToWatched()
    event.preventDefault();
  }

  render() {
    const movieItems = this.props.movies.map((movie) =>
    (<Movie key={String(Math.random())} changeMovieWatched={this.props.changeMovieWatched} handleMovieClick={this.props.handleMovieClick} movie={movie} />)
    );
    return (
      <ul>
        <button onClick={this.switchClickHandler}>Switch Lists</button>
      {movieItems}
      </ul>)
  }

}

export default MovieList