'use strict';

function User(name) {
  this.name = name
}

let nameArr = ['Byron', 'Cedric', 'Lisa']

// const makeUsers = function() {
//   for(const element of nameArr) {
//     new User(element)
//   }
// }

nameArr.forEach(element => {
  console.log(element + ' likes pie!')  
});

for (let element of nameArr) {
  console.log(element + ' likes elephants, too!')
}



let name = {...nameArr}





// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }

// for (const key in obj) {
//   console.log( obj[key] )
// }