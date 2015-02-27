var friends = ["Mike", "Stacy", "Andy", "Rick"];

// passing a callback to foreach
// foreach will invoke the callback for each element in the
// friends array.

var logFriend = function (eachName, index){
  console.log(index + 1 + ". " + eachName);
};

friends.forEach(logFriend);

// Same as above
// friends.forEach(function (eachName, index){
//   console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
// });
