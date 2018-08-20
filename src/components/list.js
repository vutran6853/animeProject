import React from 'react';
import list from './list.css';
import InputBox from './inputBox';

// MIGHT CHANGE INTO CARD FORMAT FOR LAYOUT. <--- WORK ON THIS LATER


//  RENDER ID FROM THE LIST
//  SET-UP FOR MY LIST TO DISPLAY TO RENDER ON HTML WHEN CALL
let List = props => {
  return props.list.map((val, i) => {
        // console.log(val)
        // console.log(val["attributes"].posterImage.tiny) <-- image location

    return (
     <div key={ i } class="cards ">
      
        <div class="card card-body  ">
             
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true" onClick={() => props.deletePerson(10)}>&times;</span>
              </button>
              <h3 class="card-title  "> { val["attributes"].canonicalTitle } </h3>
              <h6> { val["attributes"].averageRating } /100 </h6>
              <img src={val["attributes"].posterImage.tiny} class="card-img-top rounded-circle" />
              <h6>{val.name}</h6>
              <InputBox list={props.list}  index={i}/>

          </div>
          
     </div>
    )
  });
};

export default List;
