
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const axios = require('axios');

// OBJECT 
const { getAnime } = require('../controller/main');

const port = 3002;


app.use(bodyParser.json());
app.use(cors());


//  SET-UP FOR ENDPOINT
app.get('/api/anime', getAnime); 


//  START SERVER AND LISTEN
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});




