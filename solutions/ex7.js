// define an object literal as a global.
var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object
  setUserName: function (firstName, lastName)  {
    // this refers to the fullName property in this object
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback, callbackObj)  {
  // Do other stuff to validate firstName/lastName here

  // Hey, the this point will be changed to callbackObj
  // this this callback function is invoked.
  callback.apply (callbackObj, [firstName, lastName]);
}
debugger;
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);

console.log (clientData.fullName);// Not Set

// The fullName property was initialized on the window object
console.log (window.fullName); // Barack Obama
