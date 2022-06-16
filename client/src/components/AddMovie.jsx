import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value : ''
    };

    this.handleAddMovieChange = this.handleAddMovieChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
  }

  handleAddMovieChange = function(event){
    this.setState({value : event.target.value})
    event.preventDefault();
  }

  handleAddMovieSubmit = function(event){
    this.props.addMovie(this.state.value)
    event.preventDefault();
  }

  render() {
   return(
    <form onSubmit={this.handleAddMovieSubmit}>
      <label>
        Submit Some Movies I guess?
        <input type="text" value={this.state.value} onChange={this.handleAddMovieChange}/>
      </label>
        <input type="submit"/>
    </form>
   )
  }
}

export default AddMovie