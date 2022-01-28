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

  const employeesManaged = [];
  employees.filter(({ managers }) => managers.includes(managerId)).filter(
    ({ firstName, lastName }) => employeesManaged.push(`${firstName} ${lastName}`),
  );
  return employeesManaged;
}

module.exports = { isManager, getRelatedEmployees };
