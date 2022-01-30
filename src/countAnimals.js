const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animalList = {};
    data.species.forEach((item) => {
      animalList[item.name] = item.residents.length;
    });
    return animalList;
  }
  if (!animal.sex) {
    const findAnimal = data.species.find((item) => item.name === animal.specie);
    const specieAmount = findAnimal.residents.length;
    return specieAmount;
  }
  const findAnimal = data.species.find((item) => item.name === animal.specie);
  const compareSex = findAnimal.residents.filter((item) => item.sex === animal.sex);
  return compareSex.length;
}

module.exports = countAnimals;
