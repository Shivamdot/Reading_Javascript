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
console.log("10" == 10); //true

/* 
  Lexical scope rules say that code in one scope can access variables of
  either that scope or any scope outside of it.
*/

/**************************************
************  Chapter : 2  ************
**************************************/

// Data Types

var a;
typeof a; // "undefined"

a = undefined;
typeof a; // "undefined"

a = "hello world";
typeof a; // "string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object"--weird, bug

a = { b: "c" };
typeof a; // "object"


// Arrays are object which can hold values of multiple types

var arr = [
  "hello world",
  42,
  true
];

typeof arr; // "object"

// Functions are object subtype

function foo() {
  return 42;
}

foo.bar = "hello world"; // function can be used like an object as well

typeof foo; // "function"
typeof foo(); // "number" => type of return value, "undefined" in case of no return statement
typeof foo.bar; // "string"

// List of “falsy” values

/*
"" (empty string)
0, -0, NaN (invalid number)
null, undefined
false
*/

// Equality:
// => "==" -> checks for value equality with coercion allowed
// => "===" -> checks for value equality without allowing coercion

"42" == 42 // true
"42" === 42 // false (strict equality)

[1,2,3] == "1,2,3"  // true, as an array gets coerced to a string with commas in between
[1,2,3] === "1,2,3" // false

[1,2,3] == [1,2,3]  // false, as there reference is different


// Inequality -> "<", ">", "<=", ">="
// => it can not be used as strict mode, i.e. you cannot stop coercion to take place

41 < "42"    // true, if 1 or both are not Strings, then it is coerced to Number
"42" < "43"  // true, both the values in comparison are strings, comparison lexicographically takes place

// String element is converted to NAN (Not a number)
42 < "foo"  //false
42 > "foo"  //false
42 == "foo" //false, becoz "42" is not equal to "foo" or 42 is not equal to "NaN" (*Equality Case*)

// ## NOTE: NaN is neither greater than nor less than any other value

// Variables
// An identifier must start with a-z, A-Z, $, or _
// It can then contain any of those(Unicode) characters plus the numerals 0-9

