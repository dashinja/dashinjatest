//Counting Cards Exercise 
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

var count = 0;


function cc(card) {
  // Only change code below this line;
  var bet = ' Bet';
  var hold = ' Hold';
  var result

  if (card > 1 && card < 7) {
    count++
      if (count > 0) {
        result = count + bet;
        return result;

      } else (count < 1);
      {
        result = count + ' Hold';
        return result;
      }
  return result;

  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
      count--
        if (count > 0) {
          result = count + bet;
          return result;
      
        } else (count < 1) ;{
            result = count + ' Hold';    
            return result;
        }
    return result;

  } else {
    if (count > 0) {
      result = count + ' Bet';
    return result;
    }

    else (count < 1) ;{
      result = count + ' Hold';    
    return result;
    }
  return result;
}
  
  return result;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2));//
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));
console.log(cc('Q'))
console.log(cc('4'))
console.log(cc('6'))
console.log(cc('5'))