// Array of Current Users
var current_users = ["Ali", "Zain", "Yasir", "Uzair", "Qasir"];
// Array of New users
var new_users = ["Uzair", "Messam", "Waseem", "Aman", "Nayar"];
// Loop through new to check for usernames availbility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username alradey exist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using If-Else statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is availble"));
    }
});
