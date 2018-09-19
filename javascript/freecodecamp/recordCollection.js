////////////////////////////////////////////////////
// Record Collection
/* Challenge:
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.

Hints
Use bracket notation when accessing object properties with variables.

Push is an array method you can read about on Mozilla Developer Network.

You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.*/

// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    
  //The following section only makes the if statements less verbose when I substitute variables later,
  //It also helps tremendously if I happened to make the wrong test. 
  //Then I can troubleshoot one spot, instead of all the other places I'd have to change it
  
  //I'm the Normal Case, prop var !== 'tracks', and value is not empty.
  // var normalCase = ( prop !== 'tracks' && collection[id][prop] !== "" )
  var normalCase = ( prop !== 'tracks' && value !== "" )

  //prop var = 'tracks', but no 'track' property on object
  var trackNoProp = ( prop == 'tracks' && collection[id].hasOwnProperty('tracks') == false )

  //prop var = 'tracks', and value param is not empty
  // var tracksNoEmptyValue = ( prop == 'tracks' && collection[id][prop] !== "" )
  var tracksNoEmptyValue = ( prop == 'tracks' && value !== "" )

  //value var = empty
  var valueIsEmpty = ( value == "" )

    //delete prop in question because value is empty
    if (valueIsEmpty) {
      delete collection[id][prop];

    //create empty array for tracks then add value for tracks
    } else if (trackNoProp) {
      collection[id]['tracks'] = [];
      var arr = collection[id][prop];
        arr.push(value);

    //push value into tracks array
    } else if (tracksNoEmptyValue) {
      var arr = collection[id][prop];
        arr.push(value);
    
    //update prop with value so that prop is assigned to value.
    } else if (normalCase) {
          collection[id][prop] = value; // Must use Bracket Notation to setup the assignment for new input, aka 'value' parameter
    }
  return collection;
  }


// Alter values below to test your code
console.log(collection);// normal untouched collection object
console.log(updateRecords(2548, "album", "I'm the Normal Case"));//update value for prop
console.log(updateRecords(5439, "tracks", "Prop is tracks, but no track property.")); //create empty array for tracks then add value for tracks
console.log(updateRecords(2468, "tracks", "Prop is tracks, and value is not empty.")); //push value into tracks array
console.log(updateRecords(5439, "album", "")); //delete prop in question because value is empty