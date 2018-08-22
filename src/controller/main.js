const axios = require('axios');

//  STORE DATA FROM APIAND PASS THIS TO .app.js > animeDate ARRAY
let animeData = [];

let animeFilms = [];
// let charData = [];


//  GET DATA FROM API AND STORE INTO ARRAY
axios.get("https://kitsu.io/api/edge/anime")
.then(response => {
  //  console.log(response.data)  
  animeData = response.data.data})

// GET ANIME FILM DATA FROM API AND STORE IN MY ARRAY
axios.get("https://ghibliapi.herokuapp.com/films")
.then(response => {
   console.log(response.data)
  animeFilms = response.data
})


//  SET-UP FOR ENDPOINT AND RUN WHEN CALL
let getAnime = (req, res) => {
  res.status(200).json(animeData);
}

let getAnimeFilm = (req, res) => {
  res.status(200).json(animeFilms)
}


let addDescription = (req, res) => {
  let findAnimeID = animeData.findIndex((e) => e.id == req.params.id) 

  console.log(findAnimeID);
  animeData[findAnimeID].description = req.body.description

  // newDescription.push (req.body)
  //  console.log(req.body)
   res.status(200).send(animeData)
}


// FUNCTION TO FIND ID FROM SERVER AND RETURN IT 
const deletePerson = (req, res) => {
const anime=animeData.find(c => c.id === parseInt(req.params.id));
const i = animeData.indexOf(anime);
animeData.splice(i, 1);
  // console.log("ANIMEID     ",animeData)
res.status(200).json(animeData);
};


// EXPORT TO ENDPOINT
module.exports = {
  getAnime,
  addDescription,
  deletePerson,
  getAnimeFilm
}