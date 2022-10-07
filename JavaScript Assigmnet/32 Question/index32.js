var current_users = ['John', 'Mark', 'Dan', 'Ria', 'Ben']; 
var new_users = ['Mark', 'Shia', 'Shan', 'Ria', 'Shelly'];
var found = false;
for(i=0; i<current_users.length; i++){
    for(j=0; j<new_users.length; j++)
if(new_users[j] !== current_users[i]){
console.log("Great, " + new_users[j] + " Username is available");
found = true;
break;
}}
if(found)
console.log("Hello " +new_users[j]+ " you need to enter a new username");
