let Name = ["Ahmed", "Ammad", "Ahsan"];
console.log("Hello " + Name + " We just have recieved our bigger dining table and have more space to invite friends for dinner");
Name.unshift("Nagina");
Name.splice(2,0, "Usman");
Name.push("Hassam");
for(let i = 0; i < 6; i++){
  console.log("Hello " + Name[i] +  " This Is The Invitation Message For you to Dinner, Please come and Join Us at Sunday 08 Oct, 2022");

}
