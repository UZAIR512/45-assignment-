// Define a function with a rest parameter that accept items arugments repersenting our sandwich  
function makeSAndwich(...items: string[]){
console.log("Making a sandwich with the following items: \n");

items.forEach(singelItem => console.log(singelItem));

console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSAndwich("Chicken", "Chese", "Mayo", "Egg");

makeSAndwich("Bread", "Butter");

makeSAndwich("Bread", "Butter", "Mayo", "Chese", "Egg", "Chicken", "Tamato");