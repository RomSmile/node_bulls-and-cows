/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { searchSimilar } = require('./searchSimilar.js');
const { generatedNumber } = require('./generateNumber.js');

const terminal = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const arrOfCows = [];

function speakWithUser() {
  terminal.question(`Let's try to find your cow... `, (number) => {
    let isUnique = true;

    if (number.match(/[A-Z]/gi)) {
      console.log('You should enter only numbers');
      speakWithUser();

      return;
    }

    if (number.length < 4) {
      console.log('You must enter 4 numbers');
      speakWithUser();

      return;
    }

    if (number.length > 4) {
      console.log('You must enter 4 numbers');
      speakWithUser();

      return;
    }

    if (generatedNumber === number) {
      console.log('You winner');
      terminal.close();

      return;
    }

    for (let i = 0; i < number.length; i++) {
      for (let y = 0; y < number.length; y++) {
        if (i === y) {
          continue;
        }

        if (number[i] === number[y]) {
          isUnique = false;
          break;
        }
      }

      if (!isUnique) {
        break;
      }
    }

    if (!isUnique) {
      console.log('Your numbers must be unique');
      speakWithUser();

      return;
    }

    searchSimilar(generatedNumber, number, arrOfCows);
    arrOfCows.length = 0;
    speakWithUser();
  });
};

module.exports.speakWithUser = speakWithUser;
