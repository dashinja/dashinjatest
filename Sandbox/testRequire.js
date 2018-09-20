'use strict';

class Domain {
  constructor(name) {
    this.name = name;
    this.domain = 'Eukarya';
  }

  get live() {
    return 'I can live about 70 years on average.';
  }
}

class Kingdom extends Domain {
  constructor(name) {
    super(name);
    this.kingdom = 'Animalia';
  }
}

class Phylum extends Kingdom {
  constructor(name) {
    super(name);
    this.phylum = 'Chordata';
  }
}

class Class extends Phylum {
  constructor(name) {
    super(name);
    this.class = 'Chordata';
  }
}

class Order extends Class {
  constructor(name) {
    super(name);
    this.order = 'Primate';
  }
}

class Family extends Order {
  constructor(name) {
    super(name);
    this.family = 'Hominidae';
  }
}

class Genus extends Family {
  constructor(name) {
    super(name);
    this.genus = 'Homo';
  }
}

class Species extends Genus {
  constructor(name) {
    super(name);
    this.species = 'Sapien';
  }
}

class SubSpecies extends Species {
  constructor(name) {
    super(name);
    this.subSpecies = 'Sapien';
  }
}

class Person extends SubSpecies {
  constructor(name) {
    super(name);
  }
  get info() {
    return `My name is ${this.name}. I just so happen to be human - that is, ${
      this.domain
    } ${this.kingdom} ${this.phylum} ${this.class} ${this.order} ${
      this.family
    } ${this.genus} ${this.species}, specifically.`;
  }
}

// let test = new Class('Nothing past class');
// console.log(test);

// let cedric = new Person('Eugene');
// console.log(cedric);

// let tester = new Person(Species);
// console.log(tester);

// console.log(cedric.live);
// console.log(cedric.info);

module.exports = Person;;
