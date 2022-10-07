function make_shirt(size, message = "Summarize the shirt that's going to be made."){
    console.log("I'm going to make a " + size + " t-shirt.");
    console.log('It will say, "' + message + '"');
}
   make_shirt('Medium', 'I love Python!')
   make_shirt(size='medium', message="Readability counts.")