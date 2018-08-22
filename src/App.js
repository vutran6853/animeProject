import React, { Component } from 'react';
import './App.css';
import axios from '../node_modules/axios';

import List  from './components/list';
import Header from './components/header/header';
import Film from './components/film';

class App extends Component {
  constructor() {
    super();

    this.state = {
      animeData: [],  // <-- ALL DATA  PASS FROM api 
      charData: [],    // <-- ALL CHAR DATA
     
    }

    this.deletePerson = this.deletePerson.bind(this);

  }
  // GET DATA FROM MY SERVER
  componentDidMount() {
    axios.get('/api/anime')    
    .then( response => { 
    // console.log(response.data.data);
      this.setState({ animeData: response.data })   
    })

  }


  // FUNCTION TO GET ID FROM SERVER 
  deletePerson(id) {
    axios.delete(`/api/anime/${id}`)
      .then((response) => {
        // console.log(response);
        this.setState({ animeData: response.data })
      })
      .catch(error => console.log(error))
      
  }

  render() {

    return (
      <div className="App " >
     
        <Header />
       
        <List list={ this.state.animeData }  deletePerson={this.deletePerson}/>

      </div>
    );
  }
}

export default App;
