let sampleWord = "abc123";
let pwRegex = /(?=\w{3,})(?=\d{2})/ig; // Change this line
let result = pwRegex.test(sampleWord);
let results = pwRegex.test('')

console.log(result);

console.log(pwRegex.test('astronaut'));
console.log(pwRegex.test('airplanes'));
console.log(pwRegex.test('bana12'));
console.log(pwRegex.test('abc123'));
console.log(pwRegex.test('123'));
console.log(pwRegex.test('1234'));

console.log(sampleWord.match(pwRegex));

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\d)/;
console.log(checkPass.test(password)); 