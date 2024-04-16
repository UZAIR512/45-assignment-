// Describe a Function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling a Function
describe_city("karachi");
describe_city("Hyderabad");
describe_city("Berlin", "Germany");
