function show_magicians(magician_names){
    magician_names = ['Ali', 'Ahmed', 'Mark', 'John', 'Dan', 'Shan'];
    for(i=0; i<magician_names.length; i++){
       console.log(magician_names[i]); 
    }
}
function make_great(magician_names){
    magician_names = ['Ali', 'Ahmed', 'Mark', 'John', 'Dan', 'Shan'];
    for(i=0; i<magician_names.length; i++){
       console.log(magician_names[i]+ ' the great'); 
    }
}
make_great();
show_magicians();
