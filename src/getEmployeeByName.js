const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  // seu código aqui
  if (name === undefined) {
    return {};
  }
  return data.employees.find(({ firstName, lastName }) => name === firstName || name === lastName);
}

module.exports = getEmployeeByName;
