// Making a Function 
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScriptr"){
console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`);
}

// Calling a function with by-defualt values
make_shirt();

// Calling a function now with Medium size and default message
make_shirt("Medium")

// Calling a function now with Small size and also Different print Message 
make_shirt("small", "I Love JavaScript") 