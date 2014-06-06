
// Find all the elements with the class 'test'
var findNodes = function() {
  var nodes = [];

  // get all the elements with a class of 'test'
  var testElements = document.getElementsByClassName("test");
  for(var i = 0; i < testElements.length; i++){
    // put all of these 'test' elements into an array
    nodes.push(testElements[i]);
  }
  return nodes;
};

// Hide all the elements
var hide = function(nodes){
  var i = 0, max = nodes.length;
  for(; i < max; i +=1){
    nodes[i].style.display = 'none';
  }
  // this variable will be 'hoisted' up to the top of the function.
//   var i = 0;
}

// findNodes is being invoke and the result is passed to the 
// hide function.
hide(findNodes());
