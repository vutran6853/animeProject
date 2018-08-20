import React, { Component } from 'react';
import axios from 'axios';
import '../components/header/header.css'

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      oldName: [],      // <-- THIS IS EM
      newDescription: '',
      displayDescription: ''
     }
     
     // BIND SINCE FUNCTION IS NOT ARROW FUNCTION 
     this.handleChange1 = this.handleChange1.bind(this);
     this.addDescription = this.addDescription.bind(this);
  }

  // HANDLE CHANGE STATE FOR INPUTBOX
  handleChange(value ) {
    this.setState({ newDescription: value });
  }
  
  // THIS IS FOR HANDLE FOR ID TO DELETE FUNCTION ....TBC
  handleChange1() {
    // console.log(this.props.list[this.props.index].attributes.canonicalTitle);
    this.setState({ oldName: this.props.list[this.props.index].attributes.canonicalTitle })
  }

  addDescription() {
    axios.post(`/api/anime/${this.props.id}`, { description: this.state.newDescription })
    .then(response => {
       console.log(response) 
       this.setState({ displayDescription: response })
    })
    .catch(error => console.log(error))
    
  }

  render() {
    
    return ( 

      <div>
        <span> {this.state.newDescription} </span>
        <span> {this.props.displayDescription} </span>
        <input onChange={e => this.handleChange(e.target.value) }    
              value={this.state.newDescription}
              className="input"
              type="text" placeholder="Enter new Description">
        </input>
        <button 
              onClick={() => this.addDescription()   }
              className="btn btn-outline-primary">Add Description
        </button>


      </div>
     );
  }
}
 
export default InputBox;

