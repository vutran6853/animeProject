import React from 'react';
import list from './list.css'

// MIGHT CHANGE INTO CARD FORMAT FOR LAYOUT. <--- WORK ON THIS LATER

//  RENDER ID FROM THE LIST
//  SET-UP FOR MY LIST TO DISPLAY TO RENDER ON HTML WHEN CALL
let List = props => {
  return props.list.map((val, i) => {
       console.log(val)
        // console.log(val["attributes"].posterImage.tiny) <-- image location

    return (
     <div key={ i } class="cards ">
      
        <div class="card card-body  ">
              <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
              </button>
              <h3 class="card-title  "> { val["attributes"].canonicalTitle } </h3>
              <h6> { val["attributes"].averageRating } /100 </h6>
              <img src={val["attributes"].posterImage.tiny} class="card-img-top rounded-circle" />
              <h3>Input Component</h3>
          </div>
          
      
     </div>
    )
  });
};

export default List;