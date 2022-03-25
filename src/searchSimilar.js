/* eslint-disable no-console */
'use strict';

function searchSimilar(randomString, enteredString, arrOfCows) {
  let str = '';

  for (let i = 0; i < randomString.length; i++) {
    if (randomString[i] === enteredString[i]) {
      arrOfCows.push(enteredString[i]);
    }
  }

  arrOfCows.forEach((item, index) => {
    if (index !== arrOfCows.length - 1) {
      str += `${item}, `;
    } else {
      str += item;
    }
  });

  if (arrOfCows.length >= 1) {
    console.log('Bull! Your Cows:');
    console.log(str);
  } else {
    console.log(`bull! You don't have cows`);
  }
};

module.exports.searchSimilar = searchSimilar;
