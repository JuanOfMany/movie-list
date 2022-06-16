import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault()
  }

  handleSubmit(event) {
    let newMovies = this.props.searchMovies(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Movies:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
          <input type="submit" value="submit"/>
      </form>
    )
  }

}

export default SearchBar;