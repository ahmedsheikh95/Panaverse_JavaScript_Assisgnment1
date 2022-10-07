let Name = ["Ahmed", "Ammad", "Ahsan"];
Name.unshift("Naila");
    Name.push("Sumbal");
//for(let i = 0; i < 5; i++){
    //Name.unshift("Naila");
    //Name.push("Sumbal");
  //console.log("Hello " + Name[i] +  " This Is The Invitation Message For you to Dinner, Please come and Join Us at Sunday 08 Oct, 2022");
//Name[2]="Sumbal";
//}
let NewName = Name.slice(1 , 3);
console.log(NewName);
console.log("We can only invite two person")
//NewName = [];
//console.log(NewName + "We Can't Invite you all in Dinner");
for(let i = 0; i < 2; i++){
    //Name.unshift("Naila");
    //Name.push("Sumbal");
  console.log("Hello " + NewName[i] +  " This Is The Invitation Message For you to Dinner, Please come and Join Us at Sunday 08 Oct, 2022");
//Name[2]="Sumbal";
}

NewName = [];
console.log(NewName);