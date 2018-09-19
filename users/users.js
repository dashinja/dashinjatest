// User Object Creation Practice

// Create a "Create User Form" and use variables to map to params of User()

// User Object that recieve information either from direct input or a form
function User(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.employed = null;
  this.employer = null;
  this.title = null;
  this.greet = function() {
    return console.log(
      `My name is ${this.fname} ${this.lname}. Don't forget it!`
    );
  };
};

let user1 = new User('Byron', 'Miller');
let user2 = new User('Betty', 'Miller');
let user3 = new User('Cedric', 'Miller');
let user4 = new User('Denise', 'Miller');

console.log(user1);
console.log(user1.fname);
// console.log(`My name is ${user1.fname} ${user1.lname}. Don't forget it!`);

user1.greet;

let userArr = [user1, user2, user3, user4];
