import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : [],
      displayed: [],
      watched: [],
      notWatched: [],
      displaying : 'watched'
    };
    this.changeDisplayedToWatched = this.changeDisplayedToWatched.bind(this);
    this.changeMovieWatched = this.changeMovieWatched.bind(this);
    this.searchMovies = this.SearchMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  changeDisplayedToWatched = function() {
    var newWatched = [];
    var newNotWatched = [];
    this.state.movies.forEach(function(movie) {
      if(movie.watched) {
        newWatched.push(movie)
      } else {
        newNotWatched.push(movie)
      }
    })
    this.setState({watched : newWatched})
    this.setState({notWatched : newNotWatched})
    if(this.state.displaying === 'watched') {
      this.setState({displayed : this.state.watched})
    } else {
      this.setState({displayed : this.state.notWatched})
    }
  }

  changeMovieWatched = function(movieTitle) {
    var copyState = this.state.movies;
    copyState.forEach(function(movie, i) {
      if (movie.title === movieTitle) {
        copyState[i].watched = !copyState[i].watched
      }
    })
    this.setState({copyState})
  }

  addMovies = function(newMovie) {
    var joined = this.state.movies.concat({title: newMovie, watched: false});
    this.setState({movies: joined })
  }

  SearchMovies = function(input){
    let matchingMovies = this.state.movies.filter((movie) => (movie.title.toLowerCase().includes(input.toLowerCase())))
    this.setState({displayed : matchingMovies});
  }

  handleMovieClick = function(event) {
    if (this.movie.watched) {
      console.log(this.movie.watched)
      event.target.style.backgroundColor="green"
      this.changeMovieWatched(this.movie.title);
    } else {
      event.target.style.backgroundColor="initial"
      this.changeMovieWatched(this.movie.title);
    }
  }

  render () {
    return (
      <div>
        <SearchBar searchMovies={this.searchMovies} />
        <AddMovie addMovie={this.addMovies}/>
        <MovieList movies={this.state.displayed} matchedMovies={this.state.matching} handleMovieClick={this.handleMovieClick}changeToWatched={this.changeDisplayedToWatched} changeMovieWatched={this.changeMovieWatched}/>
      </div>
    )
  };
};

export default App;

