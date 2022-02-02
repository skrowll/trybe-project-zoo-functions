const data = require('../data/zoo_data');

function speciesPerLocation() {
  const result = data.species.reduce((acc, { location }) => {
    const animalsPerLocation = data.species.filter((item) => item.location === location);
    acc[location] = animalsPerLocation.map((item) => item.name);
    return acc;
  }, {});
  return result;
}

function sortingByName(unsorted, sort) {
  if (sort) {
    return unsorted.sort();
  }
  return unsorted;
}

function sortingBySex(item, sex, sort) {
  if (sex) {
    const unsorted = item.residents.filter((item2) => item2.sex === sex)
      .map((item3) => item3.name);
    return ({ [`${item.name}`]: sortingByName(unsorted, sort) });
  }
  const unsorted = item.residents.map((item2) => item2.name);
  return ({ [`${item.name}`]: sortingByName(unsorted, sort) });
}

function getNamesPerLocation(sex, sort) {
  const result = data.species.reduce((acc, { location }) => {
    const animalsPerLocation = data.species.filter((item) => item.location === location);
    acc[location] = animalsPerLocation.map((item) => sortingBySex(item, sex, sort));
    return acc;
  }, {});
  return result;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options || (!options.includeNames)) {
    console.log(speciesPerLocation());
    return speciesPerLocation();
  }
  console.log(getNamesPerLocation(options.sex, options.sorted));
  return getNamesPerLocation(options.sex, options.sorted);
}

module.exports = getAnimalMap;
