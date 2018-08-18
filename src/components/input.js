import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super();

    this.state = { 
      name: ""
     }
  }


  inputBox(event) {
    let newName = {
      name: this.make.name
    };
  
    axios.post('https://joes-autos.herokuapp.com/api/vehicles', newCar)
    .then( results => { 
      console.log(resp)
      // this.setState({ vehiclesToDisplay: results.data.vehicles });
    }).catch( (error) => consolg.log("Error have happen"));
  }


  render() { 
    return ( 
      <div>
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" placeholder="Enter new Name"/>  
      </div>
     );
  }
}
 
export default InputBox;
