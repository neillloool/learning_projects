'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express('body-parser');

// your code here. 
const doMadlib = (params) => {
  const {adjective1, adjective2, adjective3, adverb, name, noun, place} = params;
  return (
  `There's an extremely ${adjective1}  ${name} in ${place} and everyone's ` +
  `talking. Shockingly ${adjective2} and ${adverb} ${adjective3}, all the kids in town know about it.` + 
  `However, ${name} has a big secret - ${name}'s isn't really human. \n` + 
  `Will it end with a bite, or with a stake through your ${noun}?`);  
};


// GET requests to the root of the server
app.get('/', (req, res) => res.send(doMadlib(req.query)));



// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
