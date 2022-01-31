const data = require('../data/zoo_data');

function getLocations() {
  const mapLocations = data.species.map((item) => item.location);
  const allLocation = mapLocations.filter((item, index) => mapLocations.indexOf(item) === index);
  return allLocation;
}

function getAnimalsPerLocation(allLocation) {
  const allAnimalsPerLocation = {};
  allLocation.forEach((location) => {
    const filterAnimalPerLocation = data.species.filter((animal) => animal.location === location);
    allAnimalsPerLocation[`${location}`] = filterAnimalPerLocation.map((item) => item.name);
  });
  return allAnimalsPerLocation;
}

function getAnimalNames(allLocation) {
  const allAnimalsPerLocation = {};
  allLocation.forEach((location) => {
    const filterAnimalPerLocation = data.species.filter((animal) => animal.location === location);
    allAnimalsPerLocation[`${location}`] = filterAnimalPerLocation.map((item) => item.name);
  });
}

// eslint-disable-next-line complexity
function getAnimalMap(options) {
      // seu código aqui
      if (!options) {
        const allLocation = getLocations();
        return getAnimalsPerLocation(allLocation);
      }
      if (!options.includeNames && options.sex) {
        const allLocation = getLocations();
        return getAnimalsPerLocation(allLocation);
      }
      if (!options.includeNames && options.sex && options.sorted) {
        const allLocation = getLocations();
        return getAnimalsPerLocation(allLocation);
      }
      if (options.includeNames) {
        const allLocation = getLocations();
        return getAnimalNames(allLocation);
      }
    }

// getAnimalMap();
module.exports = getAnimalMap;
