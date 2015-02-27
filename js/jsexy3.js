 // global variable
var allUserData = [];

function logStuff (userData) {
  if ( typeof userData === "string")
  {
    console.log(userData);
  }
  else if ( typeof userData === "object")
  {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }

  }
}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
  allUserData.push (options);
  callback (options);

}

getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
