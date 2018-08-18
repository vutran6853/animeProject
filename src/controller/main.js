const axios = require('axios');


//  STORE DATA FROM APIAND PASS THIS TO .app.js > animeDate ARRAY
let animeData = [];

//  GET DATA FROM API AND STORE INTO ARRAY
axios.get("https://kitsu.io/api/edge/anime")
.then(response => {
  //  console.log(response.data)  
  animeData = response.data})
// .catch(err => console.log(err));





//  SET-UP FOR ENDPOINT AND RUN WHEN getAnime CALL
let getAnime = (req, res) => {
  res.status(200).json(animeData);
}


// EXPORT getAnime TO ENDPOINT
module.exports = {
  getAnime
}