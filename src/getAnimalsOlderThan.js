const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ageMin) {
  // seu código aqui
  const searchAnimals = data.species.filter(({ name }) => name === animal);
  const getResidents = searchAnimals[0].residents;
  const compareAges = getResidents.every(({ age }) => age >= ageMin);
  return compareAges;
}

module.exports = getAnimalsOlderThan;
