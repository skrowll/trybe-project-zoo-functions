const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === undefined) return 0;
  const entrantsAmount = {};
  const childAmount = entrants.filter((item) => item.age < 18).length;
  const adultAmount = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const seniorAmount = entrants.filter((item) => item.age >= 50).length;
  entrantsAmount.child = childAmount;
  entrantsAmount.adult = adultAmount;
  entrantsAmount.senior = seniorAmount;
  return entrantsAmount;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === undefined) return 0;
  const priceChild = entrants.filter((item) => item.age < 18).length * data.prices.child;
  const adultAmount = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const priceAdult = adultAmount * data.prices.adult;
  const priceSenior = entrants.filter((item) => item.age >= 50).length * data.prices.senior;
  return priceChild + priceAdult + priceSenior;
}

module.exports = { calculateEntry, countEntrants };
