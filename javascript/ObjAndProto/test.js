let testObj = {
  name: 'Byron',
  sex: 'Male',
  height: 'Tall'
};

function logProperty(name) {
  console.log(name); //property name
  console.log(testObj[name]); //property value
}

Object.keys(testObj).forEach(logProperty);
