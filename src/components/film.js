import React, { Component } from 'react';
import axios from 'axios';

class Film extends Component {
  constructor() {
    super();

    this.state = { 
      animeFilm: []
     }
     
  }

  componentDidMount() {
    axios.get('api/animeFilm')
    .then((response) => {
      // console.log(response.data)
       this.setState({ animeFilm: response.data })
    })
  }

  render() { 
    let film = this.state.animeFilm;
    for(let key in film) {
      console.log(film[key].description)
      return (
        <div>
          <h3>{film[key].description}</h3>
        </div>
      )

    }
    
    return ( 
      <div>
        <h3>{film.id}</h3>
      </div>
     );
  }
}
 
export default Film;