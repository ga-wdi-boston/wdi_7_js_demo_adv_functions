// click handlder
// What is the callback????


// Answer: the anon function passed to the click method
// $("#btn_1").click(function() {
//   alert("Btn 1 Clicked");
// });

var cb = function(){
  alert("Btn 1 Clicked");
};
$("#btn_1").click(cb);
