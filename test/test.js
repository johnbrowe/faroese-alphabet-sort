let assert = require('assert');
let farSort = require('../index');

const letters = [
  "Arnaldur",
  "Ruben",
  "Bartal",
  "Díðrikur",
  "Jatmundur",
  "Arndór",
  "Kristmundur",
  "Lukas",
  "Tjóðolvur",
  "Ásgeir",
  "Jøkil",
];

describe('#indexOf()', function () {
  it('Should return sorted list by faroese alphabet', function () {
    let sortedList = farSort(letters);
    console.log(sortedList);
    assert.equal('Arnaldur', sortedList[0]);
    assert.equal('Ásgeir', sortedList[2]);
    assert.equal('Tjóðolvur', sortedList[10]);
  });
});
