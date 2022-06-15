import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      matching : []
    };

    this.updateList = function(newList){console.log(this.state.movies)}
    this.searchMovies = this.SearchMovies.bind(this);
    this.updateMovies = this.updateMovies.bind(this);

  }

  updateMovies = function(newMovies) {
    this.setState({movies: newMovies});
  }


  SearchMovies = function(input){
    console.log(this.state.matching)
    let matchingMovies = this.state.movies.filter((movie) => (movie.title.toLowerCase().includes(input.toLowerCase())))
    this.setState({matching : matchingMovies});
    console.log(this.state.matching)
  }

  render () {
    return (
  <div>
    <SearchBar searchMovies={this.searchMovies} />
    <MovieList movies={this.state.matching}/>
  </div>
    )
  };
};

export default App;

