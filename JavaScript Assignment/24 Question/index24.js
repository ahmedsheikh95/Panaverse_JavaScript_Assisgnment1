var x = parseInt(prompt("Please enter the number"));
console.log("X = " + x);
var found = false;
if(x === 5){
    console.log("Conition met " +x);
    found = true;
}
else
console.log("Condition not met " + x);


var text = 'mY cOURse IS jaVAsCripT';

console.log("Original String:");
console.log(text);

console.log("Converted String:");
console.log(text.toLowerCase());

var a = 8;
var b = 8;

console.log(a == b);
console.log(a !== b);
console.log(a <= b);
console.log(a >= b);

var a = 3;
var b = 5;
var c = a && b;
var d = a || b ;
console.log(c);
console.log(d);

var name1 = ["Saleem", "Ahmed", "Ammad", "Ahsan"];
console.log("Saleem is in Array: " + name1.includes("Saleem"));

var name1 = ["Ali", "Ahmed", "Jawad", "Adeel"];
console.log("Hassam is in Array: " + name1.includes("Hassam"));
