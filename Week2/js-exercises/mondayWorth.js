'use strict'

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const calculateMoney = function (tasks) {
  if (tasks.every(task => !isNaN(task.duration))) {
    let money = tasks
      .map(task => task.duration)
      .reduce((total, b) => total + b, 0) / 60 * 25;
    return console.log(`Your hourly rate on a Monday is € ${money}`);
  } else {
    return console.log(`Please be sure your array contains duration as a number`);
  }
};
calculateMoney(mondayTasks);