import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
   this.handleWatchClick = this.handleWatchClick.bind(this)
   this.changeMovieWatched = this.props.changeMovieWatched;
  }

  handleWatchClick = function(event) {
    this.props.handleMovieClick(event)
  }

  render() {
    return (
    <li>
      {this.props.movie.title}
      <button onClick={this.handleWatchClick}> Watched? </button>
    </li>
    );
  }
}

export default Movie