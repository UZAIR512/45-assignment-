// Define the function to show magicians names
function show_magicians(show_magicians: string[]){
    magicians_names.forEach(name => console.log(name));
 }
 
 // function to make magician great through .map() it will modify array
 function make_great(magicinas: string[]){
    return magicinas.map(name => `The Great ${name}`);
 }
 
 // Definean an array of magicinas names
 let magicians_names = ["Harry poter", "Uzair", "Yasir"]
 
 // Making a copy of orginal array through .Slice() function
 let copy_magician_names = magicians_names.slice();

 // Modify the copied array to include "The Great" with thier names
 let copy_great_magicians = make_great(copy_magician_names);

 // Show both arrays orginal and Copied

 // Orginal
 console.log("orginal Array\n");
 
 show_magicians(magicians_names);

 // Copied
 console.log("\nCopied Array");
 
 show_magicians(copy_great_magicians);


 