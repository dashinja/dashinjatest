/* Question

FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

//My Simple Answer
for (number = 1; number <= 100; number++) {
  if (number % 15 == 0) {
      console.log("FizzBuzz");
    }
    else if (number % 3 == 0) {
    console.log("Fizz");
  }
  	else if (number % 5 == 0) {
      console.log("Buzz");
    } 
  	else {
      console.log(number);
    }
}

//My Clever Answer
for (number = 1; number <= 100; number++) {
  let a = "Fizz";
  let b = "Buzz";
  let c = a + b;
  
  if (number % 15 == 0) {
      console.log(c);
    }
    else if (number % 3 == 0) {
    console.log(a);
    }
  	else if (number % 5 == 0) {
      console.log(b);
    } 
  	else {
      console.log(number);
    }
}

//Clever Instructor's Answer
//This works because in JS "empty" counts as FALSE in Boolean, while NOT "Empty" counts as TRUE
//So if output remains "" at time of console.log, it counts as FALSE so control flow moves to 'n'.
//If output receives a value as having met conditions of either 'if' statement, output is no longer
//empty and thus counts as TRUE
// OR statments, aka || statements evaluate until something is TRUE and stops immediately
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}