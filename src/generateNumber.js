'use strict';

let generatedNumber = '';

while (generatedNumber.length !== 4) {
  const number = Math.floor(Math.random() * 9 + 1);

  if (!generatedNumber.includes(+number)) {
    generatedNumber += number;
  }
}

module.exports.generatedNumber = generatedNumber;
