var fullname = "Ahmed Sheikh";
var result = fullname.toUpperCase();
var result1 = fullname.toLowerCase();
//var result2 = fullname.titlecase();
console.log(result);
console.log(result1);


function toTitleCase(fullname) {
    return fullname.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase(fullname));




//console.log(result2);
//console.log(fullname.toUpperCase);