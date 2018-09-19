'use strict';

// //declaring an array
// const arr = [1, 2, 3, 4, 5, 6, 11, 22, 33, 44, 55, 21, 31, 41, 51, 61]

// //Make use of .reduce method on array to in this case, add all the elements that are dateType number
// const reducer = arr.reduce(function (first, last) {
//   return first + last
// })

// console.log(reducer)//



// //Function constructor to setup the Book Object
// function Book(name, pages, author) {
//   this.name = name
//   this.pages = pages
//   this.author = author
//   this.byWhome = {
//     get: function() {
//       return this.name + ' by ' + this.author; //define what getter function shall show upon calling the .byWhome method
//     },
//     set: function(value) {
//       let whoDoneIt = value.split(', ') //define syntax for (value) input in the setter function
//       this.name = whoDoneIt[0] //set this.name to the first element in the array of whoDoneIt
//       this.author = whoDoneIt[1] //set this.author to the second element in the array of whoDoneIt
//     }
//   }
// }

// //Create the book1 instance of the Book Object type
// var book1 = new Book('Cats are Wild!', 241, 'Catwoman Wayne')

// //Create the fav instance of the Book Object type
// var fav = new Book('Good Earth', 313, 'Pearl S. Buck')


// //Define a getter to add a method via dot notation and 'byWhom' <--- whole thing made generic by using this to make the .byWhome method in the function constructor for books.
// //Note (.byWhom() === .byWhome()) is false. Slight naming difference on purpose to differentiate the attempts and success of each
// Object.defineProperty(book1, 'byWhom', {
//   get: function() {
//     return book1.name + ' by ' + book1.author; 
//   },
//   set: function(value) {
//     let whoDoneIt = value.split(', ')
//       this.name = whoDoneIt[0]
//       this.author = whoDoneIt[1] 
//   }
// })

// console.log(book1.byWhom)

// book1.byWhom = 'The Best Book, Jane Doe'

// console.log(book1.byWhom)//
// console.log(book1.name)//
// console.log(book1.author)//

// fav.byWhome = 'Different Title, Byron Miller'
// console.log(fav.byWhome)

// var userList = {
//   name: 'Byron Miller',
//   name: 'Stephen Hodges',
//   name: 'Zachary Stauffer',
//   name: 'Andrea Rodriguez',
//   name: 'Debbie Denise'
// }

// var userListArr = ['Byron', 'Cedric', 'Betty']

// var userListing = {...userList}

// function User(function() 
//   { return (...userListing)
//   }) {
  
//     this.name = userList.name
//     // this.prototype.race = 'Human'
//     // this.prototype.taxonomy = 'Vertebrae'
  
// }

// const test = new User()





// var userList = {
//   { name: 'Byron Miller' },
//   { name: 'Stephen Hodges' },
//   { name: 'Zachary Stauffer' },
//   { name: 'Andrea Rodriguez' },
//   { name: 'Debbie Denise' }
// }

// function User(...userList) {
//   this.name = userList.name
// }

// var testUser = new User;

// console.log(Object.keys(userList[0]))

// let testLook = {...userList}

// console.log(Object.keys(testlook))

// function testLogicalAnd(val) {
//   // Only change code below this line

//   if (val <= 50 && val >= 25) {
//     return "Yes";
//     }
  

//   // Only change code above this line
//   return "No";
// }

// // Change this value to test
// console.log(testLogicalAnd(33));

// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val < 10 || val > 20) {
//     return "Outside";
//   }
//   // Only change code above this line
//   return "Inside";
// }

// // Change this value to test
// console.log(testLogicalOr(5));


// /*
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"
// */

// function caseInSwitch(val) {
//   var answer = "";
//   // Only change code below this line
//   switch (val) {
//     case 1:
//       var answer = 'alpha';
//       break;
//     case 2:
//       var answer = 'beta';
//       break;
//     case 3:
//       var answer = 'gamma';
//       break;
//     case 4:
//       var answer = 'delta';
//       break;


//   }
  
//   // Only change code above this line  
//   return answer;  
// }

// // Change this value to test
// console.log(caseInSwitch());




// /* Remember:

// switch(num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   case valueN:
//     statementN;
//     break;
// }
// */