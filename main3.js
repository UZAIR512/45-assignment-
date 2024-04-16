// Define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an array contatining magicians name
var magician_names = ["Harry poter", "Adil", "Yasir"];
// call the function to print each magician name 
show_magicians(magician_names);
