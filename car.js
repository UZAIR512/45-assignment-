// Define a function to create a car object with optional options...
function create_car(manuFacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // intialize a car object with manuFacture and model
    var car = {
        manuFacturer: manuFacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = create_car("Toyota", "Caroola", "Color: Black", "Sunroof: True", "year: 2024");
// Print the variable to ensure all the information is stored correctly in the car object 
console.log(my_car);
