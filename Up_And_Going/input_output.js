/**************************************
************  Chapter : 1  ************
**************************************/

let myName = "Shivam Sharma";

// console here is a reference to the function log()
// which is responsoble to print whatever we pass into
console.log(myName);

// another way of accessing property from objects
console["log"](myName);

// Explicit Coercion
// by using Number(..) to convert string to integer
console.log(Number("42"));

// JS also performs some Implicit coercion automatically
// like this
console.log("10" == 10);

/* 
  Lexical scope rules say that code in one scope can access variables of
  either that scope or any scope outside of it.
*/

/**************************************
************  Chapter : 2  ************
**************************************/