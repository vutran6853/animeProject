const axios = require('axios');

//  STORE DATA FROM APIAND PASS THIS TO .app.js > animeDate ARRAY
let animeData = [];
let newDescription = [];
let charData = [];


//  GET DATA FROM API AND STORE INTO ARRAY
axios.get("https://kitsu.io/api/edge/anime")
.then(response => {
  //  console.log(response.data)  
  animeData = response.data})

//  SET-UP FOR ENDPOINT AND RUN WHEN CALL
let getAnime = (req, res) => {
  res.status(200).json(animeData);
}

let addDescription = (req, res) => {
  newDescription.push (req.body)
   console.log(req.body)
   res.status(200).send(newDescription)
}




/////////       STILL NOT WORK RIGHT       ////
// FUNCTION TO FIND ID FROM SERVER AND RETURN IT 
const deletePerson = (req, res) => {
const anime=charData.find(c => c.id === parseInt(req.params.id));
const i = charData.indexOf(anime);
charData.splice(i, 1);
res.json(charData);

// console.log("ANIMEID     ",newanimeID)

res.status(200).json(newanimeID);
};
/////////  ^   ^  STILL NOT WORK RIGHT  ^   ^  ////



// EXPORT TO ENDPOINT
module.exports = {
  getAnime,
  addDescription,
  deletePerson
}