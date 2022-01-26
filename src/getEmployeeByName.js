const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const searchEmployees = (data.employees.find(({ firstName }) => employeeName === firstName)) || (data.employees.find(({ lastName }) => employeeName === lastName));
  return searchEmployees;
}

module.exports = getEmployeeByName;
