const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const searchSpecies = data.species.filter((obj) => obj.id === ids);
  // console.log(searchSpecies);
  return searchSpecies;
}

module.exports = getSpeciesByIds;
