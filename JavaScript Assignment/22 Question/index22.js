var arr = ["Car", "Motorcycle", "Bus", "Train"];
for (var i = 0; i<5; i++) {
console.log(arr[i]);
if(i==6)
console.log("Error Removed at index " + i)
}

arr.unshift("Jeep");
console.log(arr);
