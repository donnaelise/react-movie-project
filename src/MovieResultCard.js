import React from 'react';

class MovieResultCard extends React.Component {
  static defaultProps = {
    title: '',
    year: ''
  }


  render() {

    return(
        <React.Fragment>
          <hr/>
          <p>Title: {this.props.title}</p>
          <p>Year: {this.props.year}</p>
          <hr/>
        </React.Fragment>
    )
  }
}

export default MovieResultCard;