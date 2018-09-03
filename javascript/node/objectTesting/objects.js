//Object practice!

function Person(name, age, position) {
  this.name = name;
  this.age = age;
  this.position = position;


};


let me = {
  name: 'Byron',
  age: '32',
  sex: 'Male',
  color: 'Milk Chocolate',
  height: 'Very tall',
  voice: 'Smoooooth',
  drink: 'Water',
  hates: 'coconut',
  loves: 'Real, lasting peace',
  purpose: 'GGaEHF',
  greet: function() {
    console.log(`Greetings! I'm Byron! Nice to make your acquiantance!`);
  }
};

module.exports = Person;
