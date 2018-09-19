class UserCreate {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  info() {
    console.log(
      `My name is ${this.name}. I am ${this.age} years old and I live in ${
        this.location
      }.`
    );
  }
}

let locations = [
  'Charlotte, NC',
  'Davidson, NC',
  'Indian Trail, NC',
  'Greenvile, SC',
  "Traveler's Rest, SC",
  'Myrtle Beach'
];

let names = [
  'Byron Miller',
  'Sadie Johnson',
  'James Miller',
  'Stephen Hodges',
  'Cedric Miller',
  'Denise Miller'
];

let ages = [32, 74, 61, 27, 30, 7];

let persons = [];

// persons.push(names[0])
// persons.push(ages[0])
// persons.push(locations[0])
// console.log(persons)

function aggregate(names, ages, locations) {
  persons.push(names[0]);
  persons.push(ages[1]);
  persons.push(locations[1]);
  console.log(persons);

  console.log(persons);
  return persons;
}
console.log(persons);

const testUser = new UserCreate(...persons);

console.log(testUser);
testUser.info();

const testUser1 = new UserCreate(aggregate());
console.log(testUser1);
