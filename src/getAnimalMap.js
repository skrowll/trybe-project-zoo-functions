const data = require('../data/zoo_data');

function speciesPerLocation(animalsPerLocation) {
  return animalsPerLocation.map((item) => item.name);
}

function getNamesPerLocation(animalsPerLocation) {
  return console.log(animalsPerLocation);
}

function getAnimalMap(options) {
//   // seu código aqui
  const result = data.species.reduce((acc, { location }) => {
    const animalsPerLocation = data.species.filter((item) => item.location === location);
    if (!options || !options.includeNames) {
      acc[location] = speciesPerLocation(animalsPerLocation);
      return acc;
    }
    if (options.includeNames) {
      acc[location] = getNamesPerLocation(animalsPerLocation);
      return acc;
    }
    return acc;
  }, {});
  console.log(result);
  return result;
}

// // getAnimalMap();
// getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
