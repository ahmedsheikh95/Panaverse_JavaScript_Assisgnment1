let Name = ["Ahmed", "Ammad", "Ahsan"];
Name.unshift("Nagina");
    Name.push("Hassam");
console.log(Name);
console.log("Sorry " + Name + " Our dining table is not delivered yet");
let NewName = Name.slice(1 , 3);
console.log(NewName);
console.log("We can only invite two person")
for(let i = 0; i < NewName.length; i++){
  console.log("Hello " + NewName[i] +  " This Is The Invitation Message For you to Dinner, Please come and Join Us at Sunday 08 Oct, 2022");
}
console.log(NewName);
NewName = [];
console.log(NewName);
