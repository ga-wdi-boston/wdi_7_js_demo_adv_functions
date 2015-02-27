// global variable
var allUserData = [];
var generalLastName = "Clinton";

// generic logStuff function that prints to console
function logStuff (userData) {
  if ( typeof userData === "string")
  {
    console.log(userData);
  }
  else if ( typeof userData === "object")
  {
    // iterate over object properites
    for (var item in userData) {
      // log them to console
      console.log(item + ": " + userData[item]);
    }

  }

}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
  // js Array declared as a global
  allUserData.push (options);
  // callback (options);
  callback (generalLastName, options);
}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff );
