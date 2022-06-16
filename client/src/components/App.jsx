import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : [],
      matching : [],
    };

    this.updateList = function(newList){console.log(this.state.movies)}
    this.searchMovies = this.SearchMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  addMovies = function(newMovie) {
    var joined = this.state.movies.concat({title: newMovie});
    this.setState({movies: joined })
  }

  SearchMovies = function(input){
    let matchingMovies = this.state.movies.filter((movie) => (movie.title.toLowerCase().includes(input.toLowerCase())))
    this.setState({matching : matchingMovies});
  }

  render () {
    return (
      <div>
        <SearchBar searchMovies={this.searchMovies} />
        <AddMovie addMovie={this.addMovies}/>
        <MovieList movies={this.state.matching}/>
      </div>
    )
  };
};

export default App;

