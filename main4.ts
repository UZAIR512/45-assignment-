// Array of Current Users
let current_users = ["Ali", "Zain", "Yasir", "Uzair", "Qasir"]

// Array of New users
let new_users = ["Uzair", "Messam", "Waseem", "Aman", "Nayar"]

// Loop through new to check for usernames availbility
new_users.forEach(new_one_user => {

    // Making a Condition for username alradey exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different message using If-Else statment
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`This username ${new_one_user} is availble`);
  }
})