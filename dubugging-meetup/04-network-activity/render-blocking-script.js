
const arr = [];

for (let i = 0; i < 999999;  i++) {
	arr.push(i * 7)
}
arr.sort((a,b) =>  b-a);
let bigNumber = arr.reduce((a,b) =>  a + b);

console.log(bigNumber)