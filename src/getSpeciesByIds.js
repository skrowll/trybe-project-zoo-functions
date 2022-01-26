const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const searchSpecies = data.species.filter((obj) => ids.includes(obj.id));
  return searchSpecies;
}

module.exports = getSpeciesByIds;
