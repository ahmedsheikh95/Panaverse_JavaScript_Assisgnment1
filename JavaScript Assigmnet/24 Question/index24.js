var a = 3;
found = false;
if(a == 1){
    console.log(found);
}
if(a == 3){
console.log(found);
}

var text = 'GeEks FOR geeKS';

console.log("Original String:");
console.log(text);

console.log("\nConverted String:");
console.log(text.toLowerCase());

var a = 3;
var b = 3;

console.log(a == b);
console.log(a !== b);
console.log(a <= b);
console.log(a >= b);

var a = 6;
var b = 8;
var c = a && b;
var d = a || b ;
console.log(c);
console.log(d);

var name = ["Saleem", "Ahmed", "Ammad", "Ahsan"];
console.log("Ahmed is in Array: " + name.includes("Ahmed"));

var name = ["Ali", "Ahmed", "Jawad", "Akber"];
console.log("Iqbal is in Array: " + name.includes("Iqbal"));