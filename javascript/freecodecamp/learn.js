function singSong(nextOne){
  console.log('Happy Birthday to you!!');

  nextOne();
};

function bringCake(nextOne) {
  console.log('Here\'s your cake!');
  nextOne();
}

function finishedEating() {
  console.log('Now we\'ve all got the \'Itus!!');
}

singSong(bringCake(finishedEating));