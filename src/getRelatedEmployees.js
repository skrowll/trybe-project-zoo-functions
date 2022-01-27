const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const managers = [];
  employees.forEach((item) => (item.managers).forEach((item2) => managers.push(item2)));
  const compareId = managers.includes(id);
  return compareId;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // const employeesManaged = [];
  // employees.filter((employees.managers).forEach((compare) => {
  //   if (compare === managerId) {
  //     employeesManaged.push('xablau');
  //   }
  // }));
  // return employeesManaged;
  const x = employees[0].managers;
  return x;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
