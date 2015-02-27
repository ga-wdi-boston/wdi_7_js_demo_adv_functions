 // global variable
var allUserData = [];
var generalLastName = 'clinton';

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
  if(typeof callback === 'function'){
     callback (options);
  }
}
// getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
getInput ({name:"Rich", speciality:"JavaScript"}, "hello");
