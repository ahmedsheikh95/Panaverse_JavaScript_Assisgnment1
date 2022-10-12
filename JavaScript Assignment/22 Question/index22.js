var arr = ["Car", "Motorcycle", "Bus", "Train"];
for (var i = 0; i<arr.lenght; i++) {
console.log(arr[i]);
if(i==6)
console.log("Error Removed at index " + i)
}

arr.unshift("Jeep");
console.log(arr);
