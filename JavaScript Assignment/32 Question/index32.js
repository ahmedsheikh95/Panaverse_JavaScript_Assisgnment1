let current_users = ['Ahmed', 'Ammad', 'Saleem', 'Iqbal', 'Hassam']; 
let new_users = ['Nagina', 'Saleem', 'John', 'Hassam', 'Ammad'];
let found = false;
for(i=0; i < current_users.length; i++){
    for(j=0; j < new_users.length; j++)
if(new_users[j] === current_users[i]){
console.log("Hello " +new_users[j]+ " you need to enter a new username");
found = true;
break;
}}
if(found){
console.log("Great, " + new_users[0] + " Username is available");
console.log("Great, " + new_users[2] + " Username is available");
}
