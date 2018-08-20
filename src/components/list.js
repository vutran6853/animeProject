import React from 'react';
import list from './list.css';
import InputBox from './inputBox';

// MIGHT CHANGE INTO CARD FORMAT FOR LAYOUT. <--- WORK ON THIS LATER


//  RENDER ID FROM THE LIST
//  SET-UP FOR MY LIST TO DISPLAY TO RENDER ON HTML WHEN CALL
let List = props => {
  // console.log(props)
  return props.list.map((val) => {
        // console.log(val)
        // console.log(val["attributes"].posterImage.tiny) <-- image location

    return (
     <div key={ val.id } class="cards ">
      
        <div className="card card-body  ">
             
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true" onClick={() => props.deletePerson(10)}>&times;</span>
              </button>
              <h3 className="card-title  "> { val["attributes"].canonicalTitle } </h3>
              <h6> { val["attributes"].averageRating } /100 </h6>
              <img src={val["attributes"].posterImage.tiny} className="card-img-top rounded-circle" />
              <h6>{val.name}</h6>
              <InputBox id={val.id} description={val.description}/>

          </div>
         
          
     </div>
    )
  });
};

export default List;
