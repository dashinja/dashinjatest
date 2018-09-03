const Person = require('./objects')
let byron = new Person('Byron Miller', 33, 'Master of Electricity');
let stephen = new Person('Stephen HOdges', 28, 'Aspiring Coder');
let cedric = new Person('Cedric Miller', 30, 'Aspiring business man');
let denise = new Person('Denise Miller', 7, '2nd Grader');

module.exports = {
  byron: byron,
  stephen: stephen,
  cedric: cedric,
  denise: denise
}


// module.exports = byron;
// module.exports = stephen;
// module.exports = cedric;
// module.exports = denise;