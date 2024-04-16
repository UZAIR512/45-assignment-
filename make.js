// Define the function to show magicians names
function show_magicians(show_magicians) {
    magicians_names.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map() it will modify array
function make_great(magicinas) {
    return magicinas.map(function (name) { return "The Great ".concat(name); });
}
// Definean an array of magicinas names
var magicians_names = ["Harry poter", "Uzair", "Yasir"];
// Making a copy of orginal array through .Slice() function
var copy_magician_names = magicians_names.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays orginal and Copied
// Orginal
console.log("orginal Array\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
