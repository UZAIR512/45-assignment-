// Define the function to show magicians names
function show_magicians(show_magicians) {
    magicians_name.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map() it will modify array
function make_great(magicinas) {
    return magicinas.map(function (name) { return "The Great ".concat(name); });
}
// Definean array of magicinas names
var magicians_name = ["Harry poter", "Uzair", "Yasir"];
// Call show_magicians function to modify magicians names
var great_magicians = make_great(magicians_name);
// call show_magicians functions that modified list magicians
show_magicians(great_magicians);
