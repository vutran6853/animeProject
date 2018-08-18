import React, { Component } from 'react';
import './App.css';
import axios from '../node_modules/axios';


import List  from './components/list';
import Header from './components/header';


class App extends Component {
  constructor() {
    super();

    this.state = {
      animeData: [],  // <-- ALL DATA  PASS FROM api 
      charData: []    // <-- ALL CHAR DATA
    }
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
  render() {

    // console.log(this.state.charData);

    return (
      <div className="App">
        <Header />
        <List list={ this.state.animeData }/>
        
        {/* <CharInfo charInfo={ this.state.charData} /> */}
      </div>
    );
  }
}

export default App;
