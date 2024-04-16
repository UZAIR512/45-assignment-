// Define a function to create a car object with optional options...
function create_car(manuFacturer, model, ...options){
// intialize a car object with manuFacture and model
let car = {
    manuFacturer: manuFacturer,
    model: model
};

// Add additional options to the car object
options.forEach(option => {
    let [key, value] =option.split(":");
    car[key.trim()] = value.trim();
});

return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Caroola", "Color: Black", "Sunroof: True", "year: 2024");

// Print the variable to ensure all the information is stored correctly in the car object 
console.log(my_car);
