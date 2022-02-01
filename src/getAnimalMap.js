const data = require('../data/zoo_data');

function speciesPerLocation() {
  const result = data.species.reduce((acc, { location }) => {
    const animalsPerLocation = data.species.filter((item) => item.location === location);
    acc[location] = animalsPerLocation.map((item) => item.name);
    return acc;
  }, {});
  return result;
}

function getNamesPerLocation() {
  const result = data.species.reduce((acc, { location }) => {
    const animalsPerLocation = data.species.filter((item) => item.location === location);
    acc[location] = animalsPerLocation.map((item) => {
      return ({ [`${item.name}`]: item.residents.map((item2) => item2.name) });
    });
    return acc;
  }, {});
  return result;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    console.log(speciesPerLocation());
    return speciesPerLocation();
  }
  if (options.includeNames) {
    console.log(getNamesPerLocation());
    return getNamesPerLocation();
  }
}

// getAnimalMap();
getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
