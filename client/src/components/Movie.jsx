import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    watched : false,
   }

   this.handleWatchClick = this.handleWatchClick.bind(this)
  }

  handleWatchClick = function(event) {
    if (this.state.watched) {
      event.target.style.backgroundColor = 'green'
      this.setState({watched : false})
    } else {
      event.target.style.backgroundColor = 'gray'
      this.setState({watched :true})
    }
  }

  render() {
    return (
    <li>
      {this.props.movie.title}
      <button onClick={this.handleWatchClick}>Watched</button>
    </li>
    );
  }
}

export default Movie