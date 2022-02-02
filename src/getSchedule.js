const data = require('../data/zoo_data');

const objectWeek = data.hours;
const days = Object.keys(objectWeek);
const completeSchedule = {};

function getSchedule(scheduleTarget) {
  // seu código aqui
  days.forEach((item) => {
    completeSchedule[`${item}`] = (
      { officeHour: `Open from ${objectWeek[item].open}am until ${objectWeek[item].close}pm`,
        exhibition: data.species.filter((item2) => item2.availability.includes(item))
          .map((item3) => item3.name) });
  });
  completeSchedule.Monday.officeHour = 'CLOSED';
  completeSchedule.Monday.exhibition = 'The zoo will be closed!';
  if (days.includes(scheduleTarget)) {
    return { [`${scheduleTarget}`]: completeSchedule[scheduleTarget] };
  }
  if (data.species.map((item) => item.name).includes(scheduleTarget)) {
    return data.species.find((item2) => item2.name === scheduleTarget).availability;
  }
  return completeSchedule;
}

module.exports = getSchedule;
