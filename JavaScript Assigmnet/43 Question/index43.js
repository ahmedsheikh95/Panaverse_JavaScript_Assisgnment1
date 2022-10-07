function show_magicians(magician_names){
    magician_names = ['Ali', 'Ahmed', 'Mark', 'John', 'Dan', 'Shan'];
    for(i=0; i<magician_names.length; i++){
       console.log(magician_names[i]); 
    }
}
function make_great(magicians){
    magicians = ['John', 'Ria','Shelly'];
    for(i=0; i<magicians.length; i++){
       console.log(magicians[i]+ ' the great'); 
    }
}
console.log("'Great Magicians:'");
make_great();
console.log("'Origial Magicians:'");
show_magicians();
