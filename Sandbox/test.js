const Person = require('./testRequire');

let user1 = new Person('Byron');
user1.domain = 'Eukaryote';
user1.kingdom = 'Animalia';
user1.phylum = 'Chordata';
user1.class = 'Chordata';
user1.order = 'Primate';
user1.family = 'Hominidae';
user1.genus = 'Homo';
user1.species = 'Sapien';
user1.subSpecies = 'Sapien';

console.log(user1.info);
