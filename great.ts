// Define the function to show magicians names
function show_magicians(show_magicians: string[]){
   magicians_name.forEach(name => console.log(name));
}

// function to make magician great through .map() it will modify array
function make_great(magicinas: string[]){
   return magicinas.map(name => `The Great ${name}`);
}

// Definean array of magicinas names
let magicians_name = ["Harry poter", "Uzair", "Yasir"]

// Call show_magicians function to modify magicians names
let great_magicians = make_great(magicians_name);

// call show_magicians functions that modified list magicians
show_magicians(great_magicians)

