const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    const animalsLocation = {};
    const locations = data.species.map((item) => item.location);
    // https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript
    const filterLocation = locations.filter((item, index) => locations.indexOf(item) === index);
    // const x = data.species.filter((item) => item.location === filterLocation[0]);
    console.log(animalsLocation);
    console.log(locations);
    console.log(filterLocation);
  }
}

getAnimalMap();
module.exports = getAnimalMap;
