'use strict'

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const heading = document.createElement('h1');
heading.innerText = 'My Hobbies';
const ul = document.createElement('ul');

const addHobbies = (hobby) => {
  const hobbyText = document.createElement('h3');
  hobbyText.innerText = hobby;
  const li = document.createElement('li');
  li.appendChild(hobbyText);
  ul.appendChild(li);

};

myHobbies.forEach(hobby => {
  addHobbies(hobby);
})

document.body.appendChild(heading);
document.body.appendChild(ul);
