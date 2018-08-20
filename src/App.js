import React, { Component } from 'react';
import './App.css';
import axios from '../node_modules/axios';

import List  from './components/list';
import Header from './components/header/header';


class App extends Component {
  constructor() {
    super();

    this.state = {
      animeData: [],  // <-- ALL DATA  PASS FROM api 
      charData: []    // <-- ALL CHAR DATA
    }

    this.deletePerson = this.deletePerson.bind(this);

  }
  // GET DATA FROM MY SERVER
  componentDidMount() {
    axios.get('/api/anime')    
    .then( response => { 
      //  console.log(response.data.data);
      this.setState({ animeData: response.data.data })  // <-- STORE DATA ON MY ARRAY
    // 
    })

    //  GET ONE CHAR INFO BY INDEX FROM MY SERVER
    axios.get('/api/anime')    
    .then( response => { 
      // console.log(response.data.data[0].attributes);
       this.setState({ charData: response.data.data[0].attributes })  // <-- STORE DATA ON MY ARRAY
    // 
    })
  }


  // FUNCTION TO GET ID FROM SERVER 
  deletePerson(id) {
    axios.delete(`/api/anime/${id}`)
      .then((response) => {
        // console.log(response);
        this.setState({ charData: response.data })
      })
      .catch(error => console.log(error))
      
  }

  render() {

    // console.log(this.state.charData);

    return (
      <div className="App">
        <Header />
        <List list={ this.state.animeData }  deletePerson={this.deletePerson}/>
        
      </div>
    );
  }
}

export default App;
