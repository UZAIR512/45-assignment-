// Define a function to print each magician name from an array
function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

// Define an array contatining magicians name
let magician_names = ["Harry poter", "Adil", "Yasir"]

// call the function to print each magician name 
show_magicians(magician_names);